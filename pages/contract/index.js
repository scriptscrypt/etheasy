import { useAddressContext } from "../../context/wallet";

export default function Contract() {

  const {walAddress, walNo} = useAddressContext();
  return (
    <div>
      In contract route {walAddress}
      {walNo}
    </div>
  )
}
