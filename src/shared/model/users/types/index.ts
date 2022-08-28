export enum Roles {
    "ADMIN" = 1,
    "READER" = 2,
}

export type insertOrUpdateUserProps = {
    id?: number,
    display_name: string,
    user: string,
    password: string,
    role: Roles
}