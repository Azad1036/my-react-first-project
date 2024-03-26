import Profile from "../../images/profile.png"

const Header = () => {
    return (
        <div className="flex justify-between items-center  border-b-2 border-black-50">
            <h1 className="text-4xl font-bold">Recat Knowloge Cafe</h1>
            <img src= {Profile} alt="" />
        </div>
    );
};

export default Header;