export default function InputError({ message, className = "", ...props }) {
    return message ? (
        <p
            {...props}
            className={
                "text-sm text-brand-red text-right mt-1 absolute right-0" +
                className
            }
        >
            {message}
        </p>
    ) : null;
}
