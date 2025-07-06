interface PropiedadesInput extends React.InputHTMLAttributes<HTMLInputElement> { }


export const Inputs = (props: PropiedadesInput) => {
    return (
        <>
            <input
                className="border border-gray-300 p-2 rounded w-full my-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...props}
            />
        </>
    );
};