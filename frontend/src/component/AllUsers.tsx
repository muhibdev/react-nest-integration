import { useUserFindAll } from "../hooks/client"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAllUsersProps {

}

// eslint-disable-next-line no-empty-pattern
export const AllUsers = ({ }: IAllUsersProps) => {
    const { data, isLoading, error } = useUserFindAll()

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

export default AllUsers;