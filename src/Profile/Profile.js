import PropTypes from "prop-types";
const Profile =props=>{
    return(
        <>
       {props.HandleName(`${props.fullName}`)}
       {props.children}   
       <div style={{ textAlign: "center",fontFamily: "Times New Roman",}}>
<h1>{props.fullName}</h1>
{props.bio}
<br/>
{props.profession}
</div>
</>
)
}

Profile.propTypes = {
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
   };
   Profile.defaultProps = {
    fullName:`Rihab Ben mamya`,

   };
export default Profile;