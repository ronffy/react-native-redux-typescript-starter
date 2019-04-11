

const defaultOptions = {
  method: 'GET'
}

export function urlTemplate(tpl: string, data: any) {
  return tpl.replace(/{(.*?)}/g, (match, key) => data[key.trim()]);
}


const request = function (url: string, options: RequestInit = {}): Promise<Response> {
  options = {
    ...defaultOptions,
    ...options,
  }
  // return fetch(url, options)
    // .then(response => response.json())

  return new Promise(res => {
    setTimeout(() => {
      res()
    }, 2000);
  })
}

export default request
