const users = [
    {id: 1, name: 'Prabir'},
    {id: 2, name: 'Vivek'},
]

export default async () => {
    return new Response(JSON.stringify(users))
}

export const config = { path: "/api/users" };