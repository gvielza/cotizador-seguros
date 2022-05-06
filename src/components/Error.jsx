import useCotizador from "../hooks/useCotizador";

const Error = () => {
    const {error}=useCotizador()
    return (
        <div className="border text-center bg-red-500 text-white uppercase p-3 font-bold rounded-lg">
          <p> {error} </p>
        </div>
    );
};

export default Error;