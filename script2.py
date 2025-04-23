import json
import urllib.request

start_val = 0
with open("composers.txt", "w", encoding='utf-8') as composers_list:
  while True:
    contents = urllib.request.urlopen(f"http://imslp.org/imslpscripts/API.ISCR.php?account=worklist/disclaimer=accepted/sort=id/type=1/start={start_val}/retformat=json").read()
    data = json.loads(contents)
    for i in range(len(data.keys()) - 1):
        composers_list.write(f"{data[str(i)]['id'].split(':')[1]}\n")
    metadata = data['metadata']
    if metadata['moreresultsavailable']:
        start_val = 1000 + metadata['start']
    else:
        break