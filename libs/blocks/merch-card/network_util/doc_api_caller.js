const cookie = "rtFa=4wgtX+B7KiadXbqhUnLHonr5ciK3x5DpzQOlTcT6WW0mNjU5OTZhYjgtOTUyOS00YTlmLWJjNWMtYzRiZTkxMWVlZWM4IzEzMzY0NjE4NDE3MTA1MDgyNiNiYzJjMzlhMS01MDMxLTUwMDAtZTE3OS02YmY2N2U0NTZiYzcjYW1ic2luZ2glNDBhZG9iZS5jb20jMTkyNjc0I0VQNHVieGJETWZfeVlCOUFtMTBWU2xPQmVTOJnukMN2Z7mJJBhQrEnpnrkTpJsREzf384Th2eJ2WgX4oa4Lp6vUwEY+WML+EpJiv3NbaEouzqMWQ9aOWrFOggPMVi/JHZrWMVS8cADu75Sw3nuBCIwnKjRWe/E3x9GjQ3FxDNhdW0uadgyUPuB+SfFQUaixAKbp0NRBBEQWh/NJXsr4Q6IO9CG8v6MsSsGjIYE500vJ/UHBpYfCHSPy/Muj064hcZy8vwZd1q6tOpijy27/rQ2lk4AMRGwwZJwElY3RyS3qsRjmtOPxIUUym/jmtP5/kNzUwFyBz0yVtddWphGG4cubq6hhWwRKXVYz3kIuIY1EeABU9M/Ji9Q3oHG1AAAA; FedAuth=77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48U1A+VjEzLDBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMGE2MGM4OTY1QGxpdmUuY29tLDAjLmZ8bWVtYmVyc2hpcHxhbWJzaW5naEBhZG9iZS5jb20sMTMzNjQ1NDEyMTQwMDAwMDAwLDEzMzYxNDM3MTE2MDAwMDAwMCwxMzM2NTA1MDQxNzEwNTA3ODUsMjQwNToyMDE6NTAwMDo4MDcwOjk4YzU6NTlhNDpkZjJhOjkyY2EsNjcsNjU5OTZhYjgtOTUyOS00YTlmLWJjNWMtYzRiZTkxMWVlZWM4LCw0ZWViYjQ4Yy05YzFmLTRjMjEtOGEwMi1lZDAyNWU4NjVmNGQsYmMyYzM5YTEtNTAzMS01MDAwLWUxNzktNmJmNjdlNDU2YmM3LGJjMmMzOWExLTUwMzEtNTAwMC1lMTc5LTZiZjY3ZTQ1NmJjNywsMCwxMzM2NDYyMjAxNjk0ODgzNDAsMTMzNjQ4Nzc2MTY5NDg4MzQwLCwsZXlKNGJYTmZZMk1pT2lKYlhDSkRVREZjSWwwaUxDSjRiWE5mYzNOdElqb2lNU0lzSW5CeVpXWmxjbkpsWkY5MWMyVnlibUZ0WlNJNkltRnRZbk5wYm1kb1FHRmtiMkpsTG1OdmJTSXNJblYwYVNJNklsQnBjM053WnpGdVJ6QlRWMmhaU0V0aVNrVTVRVUVpZlE9PSwyNjUwNDY3NzQzOTk5OTk5OTk5LDEzMzY0NjE4NDE2MDAwMDAwMCxmZjFiM2NkOS1iYzY0LTRlM2ItOGMyOC0zYmJjNWE0YTMwOGEsLCwsLCwxMTUyOTIxNTA0NjA2ODQ2OTc2LCwxOTI2NzQsRGFEQWZqUVFtcHlPWHgyUnJLX1c1bHZvTFo0LHJZNHN4YVpYR09kMTd4VXR0bjNNVk5zSWE1SGdVK2dJT0M2VS9mc2FyNjhDUTJnRzhGekdyUG9Tb1RxWFlXVUVHM29ucDNjcVFEQVpLY290T2t2WVVWemFBbmpRUjhHc0F4dVZXNmxnWTNTdUVCNlBrZklja0ltd2VUb0I0Smo3OCt1d0xLRlNBeTJKb1RadlByNU5uMEg5TWFYb3JjS0JKdFdxMk5XdTE2VFc5eldYZGNaRGtCVGhocE4xZkxyaUFDOFRKVVRVNy8wamRMcVV3WVBIczZCZmRUS0RYbEgvZlJqRVF6NWVlN0J5Q25MYmV3RVdmNm92Y2doejJZM3VOL2JoVUJXdzFta0R5SlB2OG1uZjVKM2cvUmFvOVFWTnpYSzhld291dU5UZmd3UnkxYzZjM0hTbGN4RUVRM2FOamZzQTM2SWtxbXE2ZEl5RnZjT3UxUT09PC9TUD4=;"; // replace with your actual cookie
const filename = "test1.docx";//TODO replace this with the actual file name
const folder = "Documents";//replace this with the folder
const site = "rosahu_adobe_com";
let requestDigest = "";
export const getDoc = async () => {
  const url = "https://adobe-my.sharepoint.com/personal/"+ site +"/_api/web/GetFolderByServerRelativeUrl('"+ folder +"')/Files('" + filename + "')/$value";

  //const url = "https://adobe-my.sharepoint.com/personal/ambsingh_adobe_com/_api/web/GetFolderByServerRelativeUrl('Documents')/Files('InnovateX3.docx')/$value";
  const options = {
    method:"GET",
    credentials: 'include',
    headers: {
      'Cookie': cookie
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text(); // or response.json() if the response is JSON
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Fetch error: ${error}`);
  }
};

const getContext = async () => {
  const url = "https://adobe-my.sharepoint.com/personal/" + site + "/_api/contextinfo";
  const options = {
    method:"GET",
    headers: {
    'Cookie' : cookie,
    'Accept': "application/json;odata=verbose"
    }
  }

  try {
    const response = await fetch(url, options);
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const jsonData = JSON.parse(data);
    console.log(jsonData.d.GetContextWebInformation.FormDigestValue);
    requestDigest = jsonData.d.GetContextWebInformation.FormDigestValue;
    return jsonData.d.GetContextWebInformation.FormDigestValue;
  } catch(error) {
    console.error(`Fetch error: ${error}`);
  }
};

/**
 * curl --location --request PUT 'https://adobe-my.sharepoint.com/personal/ambsingh_adobe_com/_api/web/GetFolderByServerRelativeUrl('\''Documents'\'')/Files('\''InnovateX3.docx'\'')/$value' \
--header 'Cookie: rtFa=4wgtX+B7KiadXbqhUnLHonr5ciK3x5DpzQOlTcT6WW0mNjU5OTZhYjgtOTUyOS00YTlmLWJjNWMtYzRiZTkxMWVlZWM4IzEzMzY0NjE4NDE3MTA1MDgyNiNiYzJjMzlhMS01MDMxLTUwMDAtZTE3OS02YmY2N2U0NTZiYzcjYW1ic2luZ2glNDBhZG9iZS5jb20jMTkyNjc0I0VQNHVieGJETWZfeVlCOUFtMTBWU2xPQmVTOJnukMN2Z7mJJBhQrEnpnrkTpJsREzf384Th2eJ2WgX4oa4Lp6vUwEY+WML+EpJiv3NbaEouzqMWQ9aOWrFOggPMVi/JHZrWMVS8cADu75Sw3nuBCIwnKjRWe/E3x9GjQ3FxDNhdW0uadgyUPuB+SfFQUaixAKbp0NRBBEQWh/NJXsr4Q6IO9CG8v6MsSsGjIYE500vJ/UHBpYfCHSPy/Muj064hcZy8vwZd1q6tOpijy27/rQ2lk4AMRGwwZJwElY3RyS3qsRjmtOPxIUUym/jmtP5/kNzUwFyBz0yVtddWphGG4cubq6hhWwRKXVYz3kIuIY1EeABU9M/Ji9Q3oHG1AAAA; FedAuth=77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48U1A+VjEzLDBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMGE2MGM4OTY1QGxpdmUuY29tLDAjLmZ8bWVtYmVyc2hpcHxhbWJzaW5naEBhZG9iZS5jb20sMTMzNjQ1NDEyMTQwMDAwMDAwLDEzMzYxNDM3MTE2MDAwMDAwMCwxMzM2NTA1MDQxNzEwNTA3ODUsMjQwNToyMDE6NTAwMDo4MDcwOjk4YzU6NTlhNDpkZjJhOjkyY2EsNjcsNjU5OTZhYjgtOTUyOS00YTlmLWJjNWMtYzRiZTkxMWVlZWM4LCw0ZWViYjQ4Yy05YzFmLTRjMjEtOGEwMi1lZDAyNWU4NjVmNGQsYmMyYzM5YTEtNTAzMS01MDAwLWUxNzktNmJmNjdlNDU2YmM3LGJjMmMzOWExLTUwMzEtNTAwMC1lMTc5LTZiZjY3ZTQ1NmJjNywsMCwxMzM2NDYyMjAxNjk0ODgzNDAsMTMzNjQ4Nzc2MTY5NDg4MzQwLCwsZXlKNGJYTmZZMk1pT2lKYlhDSkRVREZjSWwwaUxDSjRiWE5mYzNOdElqb2lNU0lzSW5CeVpXWmxjbkpsWkY5MWMyVnlibUZ0WlNJNkltRnRZbk5wYm1kb1FHRmtiMkpsTG1OdmJTSXNJblYwYVNJNklsQnBjM053WnpGdVJ6QlRWMmhaU0V0aVNrVTVRVUVpZlE9PSwyNjUwNDY3NzQzOTk5OTk5OTk5LDEzMzY0NjE4NDE2MDAwMDAwMCxmZjFiM2NkOS1iYzY0LTRlM2ItOGMyOC0zYmJjNWE0YTMwOGEsLCwsLCwxMTUyOTIxNTA0NjA2ODQ2OTc2LCwxOTI2NzQsRGFEQWZqUVFtcHlPWHgyUnJLX1c1bHZvTFo0LHJZNHN4YVpYR09kMTd4VXR0bjNNVk5zSWE1SGdVK2dJT0M2VS9mc2FyNjhDUTJnRzhGekdyUG9Tb1RxWFlXVUVHM29ucDNjcVFEQVpLY290T2t2WVVWemFBbmpRUjhHc0F4dVZXNmxnWTNTdUVCNlBrZklja0ltd2VUb0I0Smo3OCt1d0xLRlNBeTJKb1RadlByNU5uMEg5TWFYb3JjS0JKdFdxMk5XdTE2VFc5eldYZGNaRGtCVGhocE4xZkxyaUFDOFRKVVRVNy8wamRMcVV3WVBIczZCZmRUS0RYbEgvZlJqRVF6NWVlN0J5Q25MYmV3RVdmNm92Y2doejJZM3VOL2JoVUJXdzFta0R5SlB2OG1uZjVKM2cvUmFvOVFWTnpYSzhld291dU5UZmd3UnkxYzZjM0hTbGN4RUVRM2FOamZzQTM2SWtxbXE2ZEl5RnZjT3UxUT09PC9TUD4=;; rtFa=4wgtX+B7KiadXbqhUnLHonr5ciK3x5DpzQOlTcT6WW0mNjU5OTZhYjgtOTUyOS00YTlmLWJjNWMtYzRiZTkxMWVlZWM4IzEzMzY0NjE4NDE3MTA1MDgyNiNiYzJjMzlhMS01MDMxLTUwMDAtZTE3OS02YmY2N2U0NTZiYzcjYW1ic2luZ2glNDBhZG9iZS5jb20jMTkyNjc0I0VQNHVieGJETWZfeVlCOUFtMTBWU2xPQmVTOJnukMN2Z7mJJBhQrEnpnrkTpJsREzf384Th2eJ2WgX4oa4Lp6vUwEY+WML+EpJiv3NbaEouzqMWQ9aOWrFOggPMVi/JHZrWMVS8cADu75Sw3nuBCIwnKjRWe/E3x9GjQ3FxDNhdW0uadgyUPuB+SfFQUaixAKbp0NRBBEQWh/NJXsr4Q6IO9CG8v6MsSsGjIYE500vJ/UHBpYfCHSPy/Muj064hcZy8vwZd1q6tOpijy27/rQ2lk4AMRGwwZJwElY3RyS3qsRjmtOPxIUUym/jmtP5/kNzUwFyBz0yVtddWphGG4cubq6hhWwRKXVYz3kIuIY1EeABU9M/Ji9Q3oHG1AAAA; FedAuth=77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48U1A+VjEzLDBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMGE2MGM4OTY1QGxpdmUuY29tLDAjLmZ8bWVtYmVyc2hpcHxhbWJzaW5naEBhZG9iZS5jb20sMTMzNjQ1NDEyMTQwMDAwMDAwLDEzMzYxNDM3MTE2MDAwMDAwMCwxMzM2NTE1Mzc2MTEyMjYwMTcsMjQwNToyMDE6NTAwMDo4MDcwOjk4YzU6NTlhNDpkZjJhOjkyY2EsNjcsNjU5OTZhYjgtOTUyOS00YTlmLWJjNWMtYzRiZTkxMWVlZWM4LCw0ZWViYjQ4Yy05YzFmLTRjMjEtOGEwMi1lZDAyNWU4NjVmNGQsYmMyYzM5YTEtNTAzMS01MDAwLWUxNzktNmJmNjdlNDU2YmM3LDRhOGYzOWExLTIwYjYtNTAwMC1kYTc4LTZjMTI5YzEzZmMwZiwsMCwxMzM2NDcyNDMzNDI0NzI3NjQsMTMzNjQ5Nzk5MzQyNDcyNzY0LCwsZXlKNGJYTmZZMk1pT2lKYlhDSkRVREZjSWwwaUxDSjRiWE5mYzNOdElqb2lNU0lzSW5CeVpXWmxjbkpsWkY5MWMyVnlibUZ0WlNJNkltRnRZbk5wYm1kb1FHRmtiMkpsTG1OdmJTSXNJblYwYVNJNklsQnBjM053WnpGdVJ6QlRWMmhaU0V0aVNrVTVRVUVpZlE9PSwyNjUwNDY3NzQzOTk5OTk5OTk5LDEzMzY0NjE4NDE2MDAwMDAwMCxmZjFiM2NkOS1iYzY0LTRlM2ItOGMyOC0zYmJjNWE0YTMwOGEsLCwsLCwxMTUyOTIxNTA0NjA2ODQ2OTc2LCwxOTI2NzQsRGFEQWZqUVFtcHlPWHgyUnJLX1c1bHZvTFo0LFU2YS9iZUQxWWVySkx3TDZXc3lFTlJWRERiQUJRNHI5Qk9jeFpQQi9YdjdUREhsSFkvNVFOc0grZWw1aUVvZnJnK2wyYkF2ZkNYM3VhYWRRekwyeEpNQ25wK3I1L3RmZlhQWEM3am5kTkIyNlQ3R1Zha3g2RCtabnNTVGFydjFsY2VhbTNJdFZxdEJKUFltdnRhUk1tMjdyVkEweTRRTkNjaW1ZTFJxL2ZSQVRHc3NWU2h5K2xjRVBFZVVqNW9aL3RIamFJdWg4ZHEvSVhlTXJYZFV3NWkwVWV3WG40dEc1eENxazdoSXBDdlp4eGx5bHI4M0hiZkZPTEx2UTl5aWpJaFdJSjNudWN0ODRXaDdPZm1Fd3pEdjNuakViRkNNVCtBcDJlY0NGaVhXRTJqbkxmeFpyeU9JQ2h1a0pFUTMvOU1XTzBPUHY2Q2R3czVrYWEwVm5Jdz09PC9TUD4=' \
--header 'X-RequestDigest: 0x89B09B094E32A4B6B568DCDADB5BA96F7D5DAB11FB2B7557D33ECF14CF08FF4A4AB6A97F197F9F46CBF8CE2AE40B0971756A11DF43A81DEE1CF39364E9FBBE86,06 Jul 2024 06:26:13 -0000' \
--header 'Content-Type: application/octet-stream' \
--header 'Content-Range: bytes 0-1277951/1277952' \
--data '@/Users/ambsingh/Downloads/response4.docx'
 */
let retryCount = 0;
export const updateDoc =  async (file) => {
  const url = "https://adobe-my.sharepoint.com/personal/" + site + "/_api/web/GetFolderByServerRelativeUrl("+ folder +")/Files("+ file +")/$value";
  const formdata = new FormData();
  formdata.append("file", file, file.name);
  const options = {
    method:"PUT",
    headers: {
      'Cookie' : cookie,
      'X-RequestDigest' :requestDigest,
      'Content-Type': "application/octet-stream",
      'Content-Range': `bytes 0-${content.length-1}/${content.length}`
    },
    body: formdata
  }

  try {
    const response = await fetch(url, options);
    if(!response.ok) {
      if(response.status === 403 && retryCount===0) {
        console.log("Retry with new digest token");
        retryCount++;
        getContext();
        updateDoc(file);
      } else {
        throw new Error(`HTTP error for update Doc! status: ${response.status}`);
      }
    }
  } catch(error) {
    console.error(`Fetch error while updating document: ${error}`);
  }
}


const accessToken = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6Ik5ST1NJM3NRU3p0aUktbUgtV2ZDZnBMOG13LUJxTGZLTEx0WF93MWpqU0EiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mYTdiMWI1YS03YjM0LTQzODctOTRhZS1kMmMxNzhkZWNlZTEvIiwiaWF0IjoxNzIxMDQ1NjA1LCJuYmYiOjE3MjEwNDU2MDUsImV4cCI6MTcyMTA1MTI4MiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhYQUFBQTlVdGVTbFdqU0t2dXgrUStEcE1KVFlTQVpoR1B6c0xVTXlYS0xiRXhVSWVuMExISXJmTUNGZFFaS0N0T1N5VXdicHNjTHlRL3hPbHFndkpuQXF0M1lJVmFkRGZoSCtDYkh0VjlmMDRpdzBZPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggRXhwbG9yZXIiLCJhcHBpZCI6ImRlOGJjOGI1LWQ5ZjktNDhiMS1hOGFkLWI3NDhkYTcyNTA2NCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiU2FodSIsImdpdmVuX25hbWUiOiJSb2hpdCIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjEyMi4xNjEuNzUuMTciLCJuYW1lIjoiUm9oaXQgU2FodSIsIm9pZCI6IjhhYTFiMTA2LTc5N2QtNGRjZi04ZjE4LTFlYTFhNTJiMjBlNiIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS03NjI5Nzk2MTUtMjAzMTU3NTI5OS05Mjk3MDEwMDAtNTY5OTIzIiwicGxhdGYiOiI1IiwicHVpZCI6IjEwMDMwMDAwOUE5MUM5QUUiLCJyaCI6IjAuQVNZQVdodDctalI3aDBPVXJ0TEJlTjdPNFFNQUFBQUFBQUFBd0FBQUFBQUFBQUFtQUYwLiIsInNjcCI6IkFjY2Vzc1Jldmlldy5SZWFkLkFsbCBDYWxlbmRhcnMuUmVhZFdyaXRlIENvbnRhY3RzLlJlYWRXcml0ZSBEZXZpY2VNYW5hZ2VtZW50QXBwcy5SZWFkLkFsbCBEZXZpY2VNYW5hZ2VtZW50QXBwcy5SZWFkV3JpdGUuQWxsIERldmljZU1hbmFnZW1lbnRDb25maWd1cmF0aW9uLlJlYWQuQWxsIERldmljZU1hbmFnZW1lbnRDb25maWd1cmF0aW9uLlJlYWRXcml0ZS5BbGwgRGV2aWNlTWFuYWdlbWVudE1hbmFnZWREZXZpY2VzLlByaXZpbGVnZWRPcGVyYXRpb25zLkFsbCBEZXZpY2VNYW5hZ2VtZW50TWFuYWdlZERldmljZXMuUmVhZC5BbGwgRGV2aWNlTWFuYWdlbWVudE1hbmFnZWREZXZpY2VzLlJlYWRXcml0ZS5BbGwgRGV2aWNlTWFuYWdlbWVudFJCQUMuUmVhZC5BbGwgRGV2aWNlTWFuYWdlbWVudFJCQUMuUmVhZFdyaXRlLkFsbCBEZXZpY2VNYW5hZ2VtZW50U2VydmljZUNvbmZpZy5SZWFkLkFsbCBEZXZpY2VNYW5hZ2VtZW50U2VydmljZUNvbmZpZy5SZWFkV3JpdGUuQWxsIERpcmVjdG9yeS5BY2Nlc3NBc1VzZXIuQWxsIERpcmVjdG9yeS5SZWFkV3JpdGUuQWxsIEZpbGVzLlJlYWRXcml0ZS5BbGwgR3JvdXAuUmVhZC5BbGwgR3JvdXAuUmVhZFdyaXRlLkFsbCBJZGVudGl0eVJpc2tFdmVudC5SZWFkLkFsbCBNYWlsLlJlYWRXcml0ZSBNYWlsYm94U2V0dGluZ3MuUmVhZFdyaXRlIE5vdGVzLlJlYWRXcml0ZS5BbGwgb3BlbmlkIFBlb3BsZS5SZWFkIHByb2ZpbGUgUmVwb3J0cy5SZWFkLkFsbCBTaXRlcy5SZWFkV3JpdGUuQWxsIFRhc2tzLlJlYWRXcml0ZSBVc2VyLlJlYWQgVXNlci5SZWFkQmFzaWMuQWxsIFVzZXIuUmVhZFdyaXRlIFVzZXIuUmVhZFdyaXRlLkFsbCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IkJWYl9sbUs3WEdSLWowSjk1a3dvbEpHWXV6UGlscnowRE5OMjl1RTJDQjQiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiV1ciLCJ0aWQiOiJmYTdiMWI1YS03YjM0LTQzODctOTRhZS1kMmMxNzhkZWNlZTEiLCJ1bmlxdWVfbmFtZSI6InJvc2FodUBhZG9iZS5jb20iLCJ1cG4iOiJyb3NhaHVAYWRvYmUuY29tIiwidXRpIjoic0p2WElFOVNQRWVHeVkxZ1Vzc1hBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX2lkcmVsIjoiOCAxIiwieG1zX3NzbSI6IjEiLCJ4bXNfc3QiOnsic3ViIjoiZUZmbTRTSHFCbDU2LW1yQTZqdlVRQ2xrUzA5dU9QdWo4bzFFZlgwNTZaRSJ9LCJ4bXNfdGNkdCI6MTM2MTgxMjc0NX0.wVYK1zKLOseTptGYlaRQfqdjhT0Cd-iVllYu4iZfIbHP4pUma5V84guMlcjK16nxwQMIlhdT3go0MigSKEgLNvwgrRsLXPWkU58FbZM0WjeVaHp4AEFhjuOHsP5ZbMp3_cytlQ7NwFL_4fItffRDvHzbF6WeUUyyo0KY6z10xd8MLQ8hKdjoLcrAiCtCM1AAGZMKplM4pvQvjj5B7S-S3mrMXfOzz2ZIehAEezR_5X-Ooj4xsQjpRqXDcVSk5S9AiGlka67KVmLnwjv_oN0t_7P-mhDFczErkbNpIPp6hmRCuTXdPHj1Q-PMVd0nAJ-GoSwNozb2IDq-QkSl6ERhRg';

export const updateDocument = async (newDocumentContent) => {
    try {
        const endpoint = "http://localhost:3000/users/drive/update";
        //const response = await fetch(`https://graph.microsoft.com/v1.0/sites/${siteId}/drive/items/${documentId}/content`, {
         
        const response = await fetch(endpoint, {
          method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/octet-stream'
            },
            body: newDocumentContent // Assuming newDocumentContent is a buffer or binary data
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log('Document updated successfully');
        return true; // or return response depending on what Microsoft Graph API returns
    } catch (error) {
        console.error('Error updating document:', error);
        throw error;
    }
}

