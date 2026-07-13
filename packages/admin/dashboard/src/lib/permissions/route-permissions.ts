import type { Permission } from "./types"

/**
 * Read permission required to access each top-level core route.
 *
 * The resource names match the policies registered on the backend
 * (see `packages/medusa/src/policies`), which is also the format returned
 * by `GET /admin/rbac/me/permissions`.
 *
 * Used both to filter the sidebar navigation and to guard the routes
 * themselves, so hiding a nav item and blocking direct URL access always
 * stay in sync.
 */
export const CORE_ROUTE_PERMISSIONS: Record<string, Permission> = {
  "/orders": "order:read",
  "/products": "product:read",
  "/collections": "product_collection:read",
  "/categories": "product_category:read",
  "/product-options": "product_option:read",
  "/inventory": "inventory_item:read",
  "/reservations": "reservation_item:read",
  "/customers": "customer:read",
  "/customer-groups": "customer_group:read",
  "/promotions": "promotion:read",
  "/campaigns": "campaign:read",
  "/price-lists": "price_list:read",
}

/**
 * Read permission required to access each settings route. Keys are the
 * full paths as used in the settings navigation. `/settings/profile` is
 * intentionally absent: every authenticated user can manage their profile.
 */
export const SETTINGS_ROUTE_PERMISSIONS: Record<string, Permission> = {
  "/settings/store": "store:read",
  "/settings/users": "user:read",
  "/settings/roles": "rbac_role:read",
  "/settings/policies": "rbac_policy:read",
  "/settings/regions": "region:read",
  "/settings/tax-regions": "tax_region:read",
  "/settings/return-reasons": "return_reason:read",
  "/settings/refund-reasons": "refund_reason:read",
  "/settings/sales-channels": "sales_channel:read",
  "/settings/product-types": "product_type:read",
  "/settings/product-tags": "product_tag:read",
  "/settings/locations": "stock_location:read",
  "/settings/translations": "translation:read",
  "/settings/publishable-api-keys": "api_key:read",
  "/settings/secret-api-keys": "api_key:read",
  "/settings/workflows": "workflow_execution:read",
}
