import CustomButton from "./customButton";

type BannerProps = {
    loggedIn: boolean
};

export default function Banner(props: BannerProps){
    return(
        <div className = 'inline-block w-full p-6 bg-sky-400'>
        <span className = 'text-3xl text-white select-none'>MusicScoreScavenger</span>
        <div className ='inline float-right'>
          <div className = 'flex gap-8 w-full bg-sky-400 pr-2'>
            {!props.loggedIn ? <div className = 'flex gap-8'>
                <CustomButton variant = "contained">Log In</CustomButton>
                <CustomButton variant = "contained">Sign Up</CustomButton>
            </div>: 
            <div></div>}
          </div>
        </div>
      </div>
    )
}