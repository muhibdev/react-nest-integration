import { useUserCreate } from "../hooks/client"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICreateUserProps {

}

// eslint-disable-next-line no-empty-pattern
export const CreateUser = ({ }: ICreateUserProps) => {
    const { data, isLoading, error, mutate } = useUserCreate()

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error.message}</div>
    }


    if (data) {
        return (<div>
            <b>User Created</b>
            <div>Response {JSON.stringify(data.data)}</div>
        </div>)
    }

    return (<div>
        <button onClick={() => {
            mutate({ data: { name: "test", email: '' } })
        }
        }>Create User</button>
    </div>)

}

export default CreateUser;