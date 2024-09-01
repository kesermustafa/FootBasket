
const Container = ({children, designs}) => {
    return (
        <div className={`${designs} max-w-[1280px] mx-auto max-xl:px-3`}>
            {children}
        </div>
    );
};

export default Container;
