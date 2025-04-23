import json
import urllib.request
from pinecone import Pinecone

pc = Pinecone(api_key="")
index_name = "music-semantic-search"
if not pc.has_index(index_name):
    pc.create_index_for_model(
        name=index_name,
        cloud='aws',
        region='us-east-1',
        embed={
            "model": "llama-text-embed-v2",
        }
    )

start_val = 0
while True:
    contents = urllib.request.urlopen(f"http://imslp.org/imslpscripts/API.ISCR.php?account=worklist/disclaimer=accepted/sort=id/type=2/start={start_val}/retformat=json").read()
    data = json.loads(contents)
    records =  data[:-1]
    index = pc.Index("music-semantic-search")
    index.upsert_records(records=records)
    metadata = data['metadata']
    if metadata['moreresultsavailable']:
        start_val = 1000 + metadata['start']
    else:
        break
        