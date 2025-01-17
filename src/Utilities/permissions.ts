export const checkPermission = (
  permissions: string[],
  permissionCode: string
) => permissions.includes(permissionCode);
