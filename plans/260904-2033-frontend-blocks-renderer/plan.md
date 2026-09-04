# Plan: Frontend Blocks Renderer & Public Pages

- **Plan ID**: `260904-2033-frontend-blocks-renderer`
- **Status**: COMPLETED
- **Owner**: payload-monorepo-template
- **Target**: `app/(app)/` & frontend components

---

## 1. Outcome & Goals

Xây dựng lớp hiển thị công khai (Public Frontend) bằng React Server Components (Next.js 15) render trực tiếp nội dung từ Payload CMS:

1. **Blocks Components**:
   - `Hero` component: Hiển thị headline, subheadline, nút CTA, ảnh nền.
   - `FeatureGrid` component: Hiển thị lưới card tính năng phong cách Linear/Vercel (nền tối `#101113`, viền hairline `#232528`, bo góc 6px).
   - `CallToAction` component: Khối banner hành động với tùy biến giao diện dark/light/gradient.
2. **Blocks Renderer Container**:
   - Component `RenderBlocks` nhận mảng `layout` từ Post và render block tương ứng an toàn theo type union.
3. **Public Post Page**:
   - Dynamic route `app/(app)/posts/[slug]/page.tsx`: Fetch dữ liệu bài viết qua Payload Local API (`getPayload`), hiển thị metadata SEO, category tags, ngày tháng, rich text content và danh sách layout blocks.
4. **Verification**:
   - Kiểm tra build/typecheck và smoke test giao diện frontend qua Playwright MCP: Render hoàn hảo khối Hero, Feature Grid (3 cards), Call To Action và admin backlink trên dark theme `#08090a`.
