---
title: "系譜学"
description: "音楽・文学・哲学を混ぜた個人的な系譜メモ。"
---

音楽・文学・哲学のつながりを、図とメモで管理するページです。

### 音楽系譜（下書き）

```mermaid
flowchart LR
  subgraph ROOT[無意識の影響?]
    subgraph FATHER[父]
      EL[エレクトロニクス]
      HOUSE[ハウス]
    end
    subgraph MOTHER[母]
      KAYO[歌謡曲]
      TRF[TRF]
    end
    subgraph ENV[環境や特質?]
      PK[プリキュアOP]
      TMG[GO GO たまごっち！]
    end
  end

  EL --> KP
  HOUSE --> KP
  PK --> KP
  TMG --> KP
  AKB --> MM[モーニング娘。]
  KAYO --> MM
  TRF --> MM
  KP --> LG[Lady Gaga]

  subgraph ELS[小学]
  KP[きゃりーぱみゅぱみゅ]
  AKB[AKB48]
  end

  subgraph JHS[中学]
  LG --> M[Madonna]
  LG --> C[Ariana / Taylor / Katy / Doja]
  AKB --> C
  MM --> E[TWICE, aespa]
  MM --> AIKO[aiko]
  end

  subgraph HS[高校]
  SR[椎名林檎]
  UH[宇多田ヒカル]
  PFM[Perfume]
  BJ[Björk]

  EL --> BJ
  AIKO --> SR
  KP --> PFM
  SR --> UH
  end

  subgraph UNI[大学]
  BJ --> Arca
  PFM --> CAPSULE
  end

  classDef person fill:#f7f4ea,stroke:#6f7f60,color:#2f2a23,stroke-width:1.2px;
  classDef source fill:#fbfaf6,stroke:#9b907f,color:#3a3329,stroke-width:1px;
  classDef bridge fill:#eef5e7,stroke:#7e9770,color:#2f4026,stroke-width:1.4px;

  class KP,MM,LG,M,C,E,AIKO,SR,UH,PFM,BJ,Arca person;
  class EL,HOUSE,KAYO,TRF,PK,TMG,AKB source;
  class LIT,PHI bridge;
```

- 実線 `-->`: 影響の流れ
- 点線 `-.->`: 併走・間接的な接続

### 年代メモ

- 2018: （ここに記入）
- 2019: （ここに記入）
- 2020: （ここに記入）
- 2021: （ここに記入）

### 追加メモ

- 図を増やすときは ` ```mermaid ` ブロックを追加
- 図と本文を分けたいときは、見出しを増やして整理
- 引用を使う場合は出典を明記
