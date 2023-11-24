export default function InputError({ message, className = "", ...props }) {
    return message ? (
        <p
            {...props}
            className={
                "text-sm text-brand-red text-right mt-1 absolute right-0" +
                className
            }
            // absolute top-0 right-0 py-[0.375rem] mocht je het zoals design precies willen maakt alleen geen sense
        >
            {message}
        </p>
    ) : null;
}
