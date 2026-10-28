export interface UserForm {
    name: string
    email: string
    password: string
    role: string

}
export interface UserResponse {
    id: number
    name: string
    email: string
    role: 'user' | 'admin'
    provider: string
    createdAt: string
    updatedAt: string

}
export type UpdateUser = Partial<UserForm>