import { ROLE_MANAGER, ROLE_COMMON} from './roles';

export const grantPermission = (role, currentRole) => {
    if (currentRole === ROLE_MANAGER || role === ROLE_COMMON || role === currentRole) {
        return true;
    } 
    return false;
}
