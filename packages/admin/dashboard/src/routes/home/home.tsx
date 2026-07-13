import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { CORE_ROUTE_PERMISSIONS } from "../../lib/permissions"
import { usePermissions } from "../../providers/permissions-provider"

export const Home = () => {
  const navigate = useNavigate()
  const { hasPermission, isLoading } = usePermissions()

  useEffect(() => {
    if (isLoading) {
      return
    }

    // Send the user to the first core page they are allowed to read.
    // Falls back to the profile settings, which every user can access.
    const target = Object.keys(CORE_ROUTE_PERMISSIONS).find((to) =>
      hasPermission(CORE_ROUTE_PERMISSIONS[to])
    )

    navigate(target ?? "/settings/profile", { replace: true })
  }, [navigate, hasPermission, isLoading])

  return <div />
}
