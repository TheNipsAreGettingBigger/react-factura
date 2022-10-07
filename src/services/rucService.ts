import { ResponseSunat } from "../interfaces"


export const rucService = async (ruc:string):Promise<ResponseSunat> => {
  const response = await fetch('https://www.softwarelion.xyz/api/sunat/consulta-ruc',{
    method:'POST',
    body:JSON.stringify({ ruc }),
    headers:{
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMyLCJjb3JyZW8iOiJ0aG9tdHdkQGdtYWlsLmNvbSIsImlhdCI6MTY2NDIzOTgzM30.vDTFmyzYLcQGjcfqyiHsVQ-c8SVoLUe6kOicV94kWMA',
      'Content-Type':'application/json'
    }
  })
  const payload = await response.json()
  return payload as ResponseSunat
  // return {} as ResponseSunat
}
