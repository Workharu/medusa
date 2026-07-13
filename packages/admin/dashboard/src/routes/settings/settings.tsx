import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

import { SETTINGS_ROUTE_PERMISSIONS } from "../../lib/permissions"
import { usePermissions } from "../../providers/permissions-provider"

export const Settings = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { hasPermission, isLoading } = usePermissions()

  useEffect(() => {
    if (location.pathname !== "/settings" || isLoading) {
      return
    }

    // Send the user to the first settings page they are allowed to read.
    // Falls back to the profile settings, which every user can access.
    const target = Object.keys(SETTINGS_ROUTE_PERMISSIONS).find((to) =>
      hasPermission(SETTINGS_ROUTE_PERMISSIONS[to])
    )

    navigate(target ?? "/settings/profile", { replace: true })
  }, [location.pathname, navigate, hasPermission, isLoading])

  return <Outlet />
}
