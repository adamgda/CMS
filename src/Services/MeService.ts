export const MeObj = JSON.parse(sessionStorage.getItem("user") || "{}");

export const MyGroupId: number = parseInt(MeObj.groupId || "0");
export const MyLogin: string = MeObj ? MeObj.login : "";

export const IsAdmin: boolean = MeObj.isAdmin;
export const IsEditor: boolean = IsAdmin || MyGroupId === 1;
