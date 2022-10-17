import { useAddressContext } from "../../context/wallet";

export default function Signer() {

  const {walAddress, walNo} = useAddressContext();


  return (
    <div>
        In signer route!{walAddress}
        {walNo}
    </div>
  )
}
