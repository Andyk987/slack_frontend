

export const FooterLegal = () => {
    const getCuurentDate = new Date();
    const getCuurentYear = getCuurentDate.getFullYear();
    
    return (
        <div className="mb-8 mt-0">
            <div className="flex xl:max-w-83 xl:px-0 2xl:max-w-7xl 2xl:px-0 mx-auto my-0">
                <span className="text-xs font-normal text-gray-light">
                    {`Copyright ${getCuurentYear} Slack Tech`}
                </span>
            </div>
        </div>
    )
}