# Plan: Core Business Collections & Content Architecture

- **Plan ID**: `260904-2005-business-collections-schema`
- **Status**: READY
- **Owner**: payload-monorepo-template
- **Target**: `test/_community/` hoặc template app

---

## 1. Outcome & Goals

Xây dựng kiến trúc dữ liệu sản phẩm đầy đủ trên nền giao diện Linear/Vercel đã reskin:

1. **Posts Collection**: Hỗ trợ Lexical RichText, dynamic slugs, SEO fields, publish workflow (draft/published), quan hệ N-1 với Categories, 1-1 với Featured Image.
2. **Categories Collection**: Cấu trúc phân cấp cha-con (nested hierarchy), tự động sinh breadcrumb.
3. **Media Collection**: Upload tối ưu ảnh, kiểm soát MIME types, trích xuất metadata và hỗ trợ focal point responsive.
4. **Layout Blocks (Page Builder)**:
   - `HeroBlock`: Tiêu đề, CTA button, background media.
   - `FeatureGridBlock`: Lưới tính năng hiển thị icon, text, badge.
   - `CallToActionBlock`: Khối chuyển đổi hành động nổi bật.

---

## 2. Phases

### Phase 1: Categories & Media Collections

- Định nghĩa schema `Categories` với quan hệ parent-child.
- Định nghĩa schema `Media` với static uploads path, resizing presets.

### Phase 2: Posts Collection & RichText Lexical

- Định nghĩa schema `Posts` với đầy đủ các field: title, slug (auto-slug hook), excerpt, content (Lexical Editor), category relationship, featured image.
- Thiết lập versions & drafts (draft/publish states).

### Phase 3: Modular Layout Blocks

- Tạo thư mục `blocks/` chứa schema definitions cho Hero, FeatureGrid, CTA.
- Tích hợp `blocks` field vào Pages/Posts collection.

### Phase 4: Verification & Smoke Test

- Kiểm tra TypeScript types phát sinh (`generate:types`).
- Khởi động dev server kiểm tra giao diện nhập liệu trực quan qua Playwright.
