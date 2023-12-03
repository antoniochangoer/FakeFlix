import Content from "./Content";

export default function Recommended({ content }) {
    let recommended = [...content.slice(5)];

    return (
        <>
            <h2 className="text-[2rem] font-light my-6 md:mt-10 3xl:mb-8">
                Recommended for you
            </h2>
            <Content content={recommended} />
        </>
    );
}
