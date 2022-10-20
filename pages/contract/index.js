import { useAddressContext } from "../../context/wallet";

export default function Contract() {

  const {prov, walNo} = useAddressContext();

  const getProv = async () =>{
  const p = await prov.getBalance("0xE3811DeFd98AF92712e54b0b3E1735c1051C86D6");
  console.log(p)
  }

  return (
    <div>
      In contract route 
      <button onClick={getProv}>GET balance</button>
      {walNo}
    </div>
  )
}
