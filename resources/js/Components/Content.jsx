import Thumbnail from "./Thumbnail";

export default function Content({ content, filteredContent }) {
    const contentToShow =
        filteredContent?.length > 0 ? filteredContent : content;

    return (
        <div className="mr-4 md:mr-10 3xl:mr-10">
            <div className="grid grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-4 md:gap-8 3xl:gap-10">
                {contentToShow.map((content) => (
                    <Thumbnail key={content.id} content={content} />
                ))}
            </div>
        </div>
    );
}
