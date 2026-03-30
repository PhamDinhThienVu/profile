# Portfolio Project

A simple static portfolio website built with HTML and CSS. It showcases a personal profile, featured projects, skills, and contact details.

## Contents

- `index.html` — main portfolio page
- `style.css` — responsive styling for layout, sections, and cards
- `style.scss` — nguồn Sass/SCSS dùng để phát triển

## Features

- clean, modern portfolio layout
- responsive design for desktop and mobile
- hero section with CTA buttons
- featured projects, skills, and contact section
- source SCSS file cho cấu trúc stylesheet chuyên nghiệp

## How to use

1. Open `index.html` in a browser.
2. Customize the text and project details.
3. Update contact information as needed.

## Nâng cấp SCSS

- Đã thêm file nguồn `style.scss` để dùng Sass/SCSS thay cho CSS thô.
- Giữ lại `style.css` làm phiên bản đã biên dịch để trình duyệt vẫn hoạt động ngay.
- `style.scss` sử dụng biến, lồng selector và cấu trúc rõ ràng hơn.

## Quy trình thực hiện

1. Kiểm tra nội dung hiện tại của `index.html`, `style.css` và `README.md`.
2. Tạo file SCSS mới `style.scss` với cấu trúc Sass chuẩn.
3. Chuyển toàn bộ stylesheet hiện tại sang SCSS, nhóm các đoạn CSS theo từng thành phần.
4. Giữ `style.css` như file đầu ra dùng cho trình duyệt.
5. Cập nhật README để ghi nhớ quy trình và lưu ý cách compile.

## Lưu ý khi dùng SCSS

- Nếu muốn tái biên dịch SCSS sang CSS sau này, dùng: `sass style.scss style.css`
- Hoặc tích hợp vào pipeline build với Sass nếu dự án mở rộng.
