import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import GoalForm from "../components/GoalForm";
import { getGoals, reset } from "../features/goals/goalSlice";
import GoalItem from "../components/GoalItem";

function Dashboard() {

    const navigate = useNavigate();
    const {user} = useSelector((state) =>  state.auth);
    const {goals,isLoading,isError,message} = useSelector((state) =>  state.goals);

    const dispatch = useDispatch()

    useEffect(() => {
        if(isError){
            console.log(message);
        }

        dispatch(getGoals())


        if(!user){
            navigate('/login')
        }

        return () => {
            dispatch(reset())
        }
    }, [user,navigate,isError,message,dispatch])

    if(isLoading){
        return "Spinner";
    }

    return (
        <>
        <section>
            <h1>Welcome {user && user.name}</h1>
            <p>Goals Dashboard</p>
            <GoalForm/>

            <section className="content">
                {goals.length > 0 ?
                <div className="goals">
                    {goals.map((goal) => {
                        return (
                            <GoalItem key={goals._id} goal={goal} />
                        )
                    })}
                </div>
                : "No Goals"}
            </section>

        </section>
        </>

    )
}

export default Dashboard
