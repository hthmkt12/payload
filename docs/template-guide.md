# Template Architecture & Usage Guide

Hệ thống mẫu Payload CMS 3.x (Next.js 15 App Router) tích hợp giao diện thiết kế phong cách **Linear / Vercel** và cấu trúc **Business Schema & Modular Page Builder**.

---

## 1. Tổng quan Thiết kế (Linear / Vercel Aesthetic)

Toàn bộ UI của Admin Panel được chuẩn hóa theo hệ quy chuẩn thiết kế tại `DESIGN.md`:

- **Palette**: Dark carbon nền sâu (`#08090a`), card panel (`#101113`), dropdown panel (`#141518`).
- **Hairline Borders**: Đường viền tối giản tinh tế `1px solid #232528` (`--color-border`).
- **Radius**: Bo góc chuẩn 6px (`--radius-medium: 6px`) cho toàn bộ nút bấm, ô nhập liệu, modal và card.
- **Accents**: Điểm nhấn thương hiệu Linear Purple / Vercel Monokai (`--color-accent`).

---

## 2. Kiến trúc Dữ liệu Cốt lõi (Collections)

Cấu trúc collections tại `test/_community/collections/` phục vụ xây dựng trang tin tức, blog hoặc trang giới thiệu sản phẩm:

### 2.1. Categories (`CategoriesCollection`)

- **Vị trí**: `test/_community/collections/Categories/index.ts`
- **Mục đích**: Phân loại nội dung đa cấp (Hierarchical Taxonomy).
- **Cấu trúc trường**:
  - `title`: Tên danh mục (bắt buộc).
  - `slug`: Đường dẫn URL danh mục (index, vị trí sidebar).
  - `parent`: Quan hệ tự tham chiếu (Self-referencing relationship) đến chính collection `categories`. Có bộ lọc chống chọn vòng tròn (`not_equals: id`).

### 2.2. Media (`MediaCollection`)

- **Vị trí**: `test/_community/collections/Media/index.ts`
- **Mục đích**: Quản lý tệp đa phương tiện, tối ưu hóa ảnh tự động.
- **Tính năng**:
  - Hỗ trợ `crop` và `focalPoint` tương thích responsive.
  - Bộ lọc MIME type khắt khe: `image/*`.
  - Tự động sinh 3 kích thước ảnh tối ưu:
    - `thumbnail`: 200x200
    - `medium`: 800x800
    - `large`: 1200x1200

### 2.3. Posts (`PostsCollection`)

- **Vị trí**: `test/_community/collections/Posts/index.ts`
- **Mục đích**: Bài viết / Trang nội dung chính.
- **Tính năng**:
  - `title`: Tiêu đề bài viết.
  - `slug`: Đường dẫn định danh trang.
  - `categories`: Quan hệ N-N (`hasMany: true`) liên kết với `CategoriesCollection`.
  - `featuredImage`: Quan hệ 1-1 với `MediaCollection`.
  - `content`: Trình soạn thảo văn bản phong phú **Lexical RichText Editor**.
  - `layout`: Trường Blocks động hỗ trợ Page Builder linh hoạt.
  - `versions`: Bật drafts (`drafts: true`), hỗ trợ trạng thái lưu nháp (`draft`) và xuất bản (`published`).

---

## 3. Modular Layout Blocks (Page Builder)

Các khối giao diện lắp ghép được tổ chức độc lập tại `test/_community/blocks/`:

| Block              | Slug           | Interface Name      | Cấu trúc trường chính                                                                                                  |
| ------------------ | -------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Hero**           | `hero`         | `HeroBlock`         | `headline` (text required), `subheadline` (text), `ctaText`, `ctaLink`, `backgroundImage` (upload trỏ đến `media`)     |
| **Feature Grid**   | `featureGrid`  | `FeatureGridBlock`  | `sectionTitle` (text required), `sectionDescription` (textarea), `features` (array required: title, description, icon) |
| **Call To Action** | `callToAction` | `CallToActionBlock` | `title` (text required), `description` (textarea), `buttonText`, `buttonLink`, `theme` (select: dark, light, gradient) |

### Cách thêm một Block mới:

1. Tạo file định nghĩa block trong `test/_community/blocks/MyBlock.ts` triển khai type `Block` từ `'payload'`.
2. Khai báo `interfaceName` tường minh để Payload tự động sinh TypeScript type chuẩn.
3. Xuất qua barrel file `test/_community/blocks/index.ts`.
4. Đưa block vào mảng `blocks` trong collection mong muốn (`PostsCollection`, `PagesCollection`, ...).
5. Chạy `pnpm run dev:generate-types _community` để đồng bộ types.

---

## 4. Hướng dẫn Phát triển & Vận hành

### 4.1. Lệnh thường dùng

```bash
# Khởi động dev server với config mẫu
pnpm run dev _community

# Tự động sinh TypeScript types
pnpm run dev:generate-types _community

# Tự động sinh importMap cho Admin UI
pnpm run dev:generate-importmap _community

# Kiểm tra quy chuẩn CSS
pnpm run lint:css
```

### 4.2. Nguyên tắc an toàn hệ thống (Rules & Hygiene)

- Luôn kiểm tra giải phóng port khi kết thúc dev server (`process-management.md`).
- Tuân thủ quy chuẩn `DESIGN.md` làm Single Source of Truth cho toàn bộ token giao diện.
- Tránh phụ thuộc dữ liệu giả định, luôn kiểm chứng trực quan bằng Playwright hoặc types thực tế.
