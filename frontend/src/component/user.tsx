import { useUserFindOne } from "../hooks/client";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IUserProps {
    id: string
}

// eslint-disable-next-line no-empty-pattern
export const User = ({ id }: IUserProps) => {
    const { data, isLoading, error } = useUserFindOne(id)

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error.message}</div>
    }
    return (<div>
        <div>Response: {JSON.stringify(data.data)}</div>
    </div>)
}

export default User;