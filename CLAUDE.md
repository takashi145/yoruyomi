# 夜読み — 執筆ガイド

このサイトの小説は以下のルールに従うこと。

---

## ファイル構成

```
src/content/novels/
  {workSlug}/
    chapter-01.md
    chapter-02.md
    ...
```

- `workSlug` はURLに使う英数字＋ハイフン（例: `silent-rain`）
- ファイル名は `chapter-01.md` 形式でゼロ埋め

---

## フロントマター

```yaml
---
title: 章タイトル
workTitle: 作品タイトル
workSlug: work-slug
chapterNumber: 1
synopsis: あらすじ（第1章のみ記載。100〜200字程度）
genre: [ミステリー]
publishedAt: 2026-01-01
status: complete   # complete | wip
featured: true     # 注目作品にする場合のみ第1章に付与
---
```

- `synopsis` と `genre` と `featured` は第1章のみに書く
- 連載中は `status: wip`、完結時に `complete` へ変更
- `publishedAt` は第1章の日付で固定（章を追加しても変えない）

---

## 文体・表記

- 地の文は三人称または一人称。混在しない
- 句読点は「、」「。」を使う。読点は多用しない
- 会話文は「」で括る。ト書きは改行して地の文に続ける
- 段落の冒頭は一字下げ（スペース不要。CSSで `text-indent: 1em` が適用される）
- 心理描写の強調には傍点ではなく文脈で表現する
- 漢字とひらがなのバランスに注意。硬すぎず柔らかすぎず

## 章の区切り

- Markdownの `##` 見出しで場面を区切れる
- 場面転換は `---`（水平線）でも可
- 1章あたりの目安は2,000〜8,000字

---

## コミット運用

- `src/content/` もコミット対象
- 小説を追加・更新したらコミットする
