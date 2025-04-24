import json
import urllib.request
import uuid
import time
from pinecone import Pinecone
import itertools

pc = Pinecone(api_key="pcsk_56gaLU_9rBUc7aQrR8JPegEFucELAytRA63EHTCXfHN8HJCkggJGDazNRvgQSQiy9Cka4y")
index_name = "music-semantic-search"
if not pc.has_index(index_name):
    pc.create_index_for_model(
        name=index_name,
        cloud='aws',
        region='us-east-1',
        embed={
            "model": "llama-text-embed-v2",
            "field_map": {"text": "chunk-text"}
        }
    )

start_val = 0
while True:
    contents = urllib.request.urlopen(f"http://imslp.org/imslpscripts/API.ISCR.php?account=worklist/disclaimer=accepted/sort=id/type=2/start={start_val}/retformat=json").read()
    data = json.loads(contents)
    records = [{"_id": str(uuid.uuid4()), "chunk-text": f"{data[str(k)]['intvals']['worktitle']}, {data[str(k)]['intvals']['composer']}", "title": data[str(k)]['intvals']['worktitle'], "composer": data[str(k)]['intvals']['composer'], "link": data[str(k)]['permlink']} for k in range(len(data) - 1)]
    records_iter = iter(records)
    index = pc.Index("music-semantic-search")
    chunk = list(itertools.islice(records_iter, 96))
    while chunk:
        index.upsert_records(namespace = "pieces", records=chunk)
        chunk = list(itertools.islice(records_iter, 96))
        print(chunk)
    metadata = data['metadata']
    if metadata['moreresultsavailable']:
        start_val = 1000 + metadata['start']
    else:
        break
        