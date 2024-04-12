import { Triangle } from "react-loader-spinner"


export const Loading = () => {
    return (
        <div className="h-[calc(100vh-123px)] w-full flex flex-col justify-center items-center bg-[#193851]">
            <div className="flex justify-center items-center h-full">
                <Triangle
                    visible={true}
                    height="80"
                    width="80"
                    color="#18ff14"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
                <h4 className="text-white">Loading...</h4>
            </div>
        </div>
    )
}
