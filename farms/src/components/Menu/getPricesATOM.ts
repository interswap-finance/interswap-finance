import { useEffect, useState } from 'react'

  type ApiResponse = {
    prices: {
      [key: string]: string
    }
  }
  
  /**
   * Due to Cors the api was forked and a proxy was created
   * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba
   */
  const api = 'https://api.pancakeswap.info/api/v2/tokens/0x0eb3a705fc54725037cc9e008bdede697f62f335'
  
  const useGetPriceATOMData = () => {
    const [data, setData] = useState<ApiResponse | null>(null)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(api)
          // get bnb price    
          const res: ApiResponse = await response.json()      /// => res.data.price
          // @ts-ignore
          setData(res.data.price)
          console.log("atom: ",res)
        } catch (error) {
          console.error('Unable to fetch price data:', error)
        }
      }
  
      fetchData()
    }, [setData])
  
    return data
  }
  
  export default useGetPriceATOMData
  