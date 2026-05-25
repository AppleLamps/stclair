# CASE_BRIEFING_StClair_v_xAI.md

## TL;DR

**St. Clair v. X.AI Holdings Corp.**, No. 1:26-cv-00386-ALC (S.D.N.Y., Judge Andrew L. Carter, Jr.), began as a New York Supreme Court action filed January 15, 2026; defendant removed the same day under diversity jurisdiction. The complaint alleges Grok-generated sexualized deepfakes of Ashley St. Clair were published on X, coupled with alleged account retaliation; the plaintiff sought emergency injunctive relief. The court **denied a TRO** on January 16, 2026, converted the request into an order to show cause on a preliminary injunction, and set briefing and a status conference. Defendants pursue **transfer to the Northern District of Texas** under 28 U.S.C. § 1404, relying on xAI and X terms of service (exclusive Texas venue, third-party beneficiaries, closely related entities) and a **first-filed** suit in Texas. The record through the March 24, 2026 letters shows **no final ruling** on transfer or the preliminary injunction; instead, multiple rounds of **supplemental evidence**, **sealing/redaction** disputes, and **three-page letters** (ordered March 12, 2026, due March 24, 2026) on whether plaintiff assented to updated X terms (Version 20/21), time-zone interpretation of logs, and enforceability by non-signatory xAI entities. No answer on the merits appears in the provided file set; operative pleadings beyond the original state complaint may be incomplete in this archive.

---

## 0. File inventory (directory: `St. Clair v. X.AI Holdings Corp., 1-26-cv-00386`)

Source: on-disk listing and `download_manifest.json`. Each logical RECAP document has a **PDF** and a machine **OCR `.txt`** extract (`Source PDF` header). Sizes below are from the filesystem (PDF byte length; `.txt` is the OCR companion).

| Base name (`gov.uscourts.nysd.656279.*`) | PDF size (bytes) | Apparent ECF / content (from OCR header) |
|----------------------------------------|------------------|------------------------------------------|
| `1-0` | 179,789 | ECF 1 — Notice of Removal |
| `1-1` | 1,452,373 | ECF 1-1 — Exhibit A: NYS summons, complaint, state OSC package, memos, proposed orders, exhibits |
| `2-0` | 2,571,948 | ECF 2 — Civil cover sheet (JS-44) |
| `7-0` | 157,917 | ECF 7 — Proposed federal order to show cause / TRO (Rule 65) |
| `7-1` | 211,523 | ECF 7-1 — Plaintiff memorandum in support of TRO |
| `7-2` | 253,364 | ECF 7-2 — Attorney affirmation (C. Goldberg) |
| `7-3` | 150,876 | ECF 7-3 — Exhibit A: email notice to legal@x.ai |
| `7-4` | 91,405 | ECF 7-4 — Exhibit B: Shuster email re TRO papers |
| `7-5` | 128,857 | ECF 7-5 — Plaintiff affirmation (A. St. Clair) |
| `13-0` | 236,606 | ECF 13 — Def. opening memorandum, § 1404 transfer + forum selection (xAI TOS) |
| `15-0` | 129,288 | ECF 15 — Order: deny TRO; OSC re preliminary injunction; schedule |
| `17-0` | 262,141 | ECF 17 — Def. memorandum in opposition to preliminary injunction |
| `23-0` | 2,589,202 | ECF 23 — Barry Murphy declaration (reply on transfer / account creation) |
| `23-1` | 217,367 | ECF 23-1 — Exhibit A: historical xAI TOS excerpts |
| `23-2` | 481,238 | ECF 23-2 — Exhibit B: xAI TOS excerpts |
| `25-0` | 145,156 | ECF 25 — Order: production of sign-up/assent records; supplemental briefing; conference |
| `34-0` | 3,971,923 | ECF 34 — Murphy supplemental declaration (account data; exhibits referenced) |
| `34-1` | 102,045 | ECF 34-1 — Exhibit A placeholder (minimal OCR text) |
| `34-2` | 82,812 | ECF 34-2 — Exhibit B placeholder (minimal OCR text) |
| `39-0` | 228,802 | ECF 39 — Letter: request to redact/seal portions of supplemental brief |
| `44-0` | 115,639 | OCR header ECF **33** — Federal summons re X.AI Corp. |
| `45-0` | 131,300 | OCR header ECF **38** — Federal summons re X.AI LLC |
| `46-0` | 254,437 | ECF 46 — Plaintiff letter opposing sealing (Doc. 28) |
| `56-0` | 193,463 | ECF 56 — Letter: seal Murphy exhibit (IP/location) |
| `60-0` | 125,142 | ECF 60 — Order: sealing motions granted in part (email/IP redaction); refile with line redactions |
| `61-0` | 119,395 | ECF 61 — Order: further briefing on X TOS / forum clause enforceability by X.AI |
| `62-0` | 122,793 | **Anomalous:** caption is *Gianela Alicea v. Artesano Café Corp.*, 25-cv-08888 — not this case; treat as corrupted/misfiled in archive |
| `65-0` | 313,412 | ECF 65 — Def. further supplemental memorandum (X TOS Versions 20/21; third-party beneficiaries; Fasano/Magi) |
| `70-0` | 221,866 | ECF 70 — Letter: permission to redact Exhibit A (IP) |
| `74-0` | 114,127 | ECF 74 — Endorsed memo: grant seal/redacted public filing; terminate ECF 70 |
| `77-0` | 228,419 | ECF 77 — Plaintiff letter: timezone/log interpretation; request to file further declaration — **granted** (references ECF 76) |
| `81-0` | 222,611 | ECF 81 — Def. letter: extend time to answer FAC until 30 days after transfer ruling |
| `82-0` | 142,601 | ECF 82 — Certificate of service (Birkenfeld-Malpass declaration) |
| `85-0` | 135,078 | ECF 85 — Endorsed memo: grant redacted further declaration; terminate ECF 78 |
| `86-0` | 145,292 | ECF 86 — Endorsed memo: grant appended Birkenfeld-Malpass short declaration; terminate ECF 79–80 |
| `88-0` | 177,965 | ECF 88 — Plaintiff letter: further declaration with browser log — **granted** |
| `89-0` | 213,922 | ECF 89 — Def. letter: simultaneous letters or further conference |
| `90-0` | 128,975 | ECF 90 — Endorsed memo: parties submit ≤3-page letters by **March 24, 2026** |
| `91-0` | 296,542 | ECF 91 — Def. letter (3/24/26): Version 20 & 21 X TOS; access logs; xAI TOS |
| `92-0` | 123,160 | ECF 92 — Plaintiff letter (3/24/26): oppose transfer; foreseeability; Sony draft; timezone argument |
| `download_manifest.json` | 11,780 | Download metadata (40 unique PDF URLs; all marked downloaded) |

**Readability notes:** OCR text is generally usable for narrative and paragraph cites; exhibits that are images/screenshots may appear as `![img-0.jpeg]` with no extractable text. Several defense exhibits (e.g., ECF 34-1/34-2) OCR to stubs only. **ECF 62** in this folder does not match the St. Clair caption. **Many ECF entries cited in the briefings** (e.g., 11, 12, 16, 18, 21, 28–29, 36, 40–41, 47, 55, 64, 69–71, 76, 79–80, 84) **are not present** in this RECAP bundle.

---

## 1. Case caption and procedural posture

- **Court:** United States District Court for the Southern District of New York. (`gov.uscourts.nysd.656279.1.0.txt`, Notice of Removal header)
- **Judge:** Andrew L. Carter, Jr. (orders on ECF 15, 25, 60, 61). (`gov.uscourts.nysd.656279.15.0.txt` at p. 1)
- **Case number:** 1:26-cv-00386-ALC (suballocation noted on later filings). (`gov.uscourts.nysd.656279.15.0.txt` at p. 1)
- **Origin:** Removed from New York Supreme Court, New York County, filed January 15, 2026. (`gov.uscourts.nysd.656279.1.0.txt` ¶¶ 1–2)
- **Defendant’s jurisdictional theory:** Diversity under 28 U.S.C. §§ 1332, 1441, 1446; plaintiff New York; defendant Nevada incorporation, California PPB; amount in controversy > $75,000 pleaded via damages claims. (`gov.uscourts.nysd.656279.1.0.txt` ¶¶ 3–11)
- **Emergency motion posture:** Plaintiff sought TRO/preliminary injunction (ECF 7 series). Court **denied TRO** and ordered show cause as to preliminary injunction; defense response originally due **January 21, 2026**; reply **January 23, 2026**; telephone conference **January 26, 2026, 3:30 p.m.** (`gov.uscourts.nysd.656279.15.0.txt` at p. 1)
- **Transfer motion posture:** Defendant filed memorandum in support of transfer (ECF 13) January 16, 2026; extensive supplemental briefing and declarations followed (e.g., ECF 23, 34, 65, 91).
- **Latest scheduling in this record:** March 12, 2026 order: simultaneous letters ≤3 pages due **March 24, 2026** (ECF 90). Parties filed ECF 91 (defense) and 92 (plaintiff) on March 24, 2026. **No order resolving § 1404 or the preliminary injunction** appears in the provided files after those letters.
- **Sealing:** February 13, 2026 order: redaction of email/IP granted; other broad sealing denied; meet-and-confer on other sensitive fields (ECF 60). Subsequent filings address redacted declarations (ECF 74, 85, 86, 88).
- **February 13, 2026 order (ECF 61):** Additional briefing ordered on whether X.AI may assert **X** (not only xAI) terms of service—defense brief **February 18, 2026**; plaintiff reply **February 23, 2026**. (`gov.uscourts.nysd.656279.61.0.txt` at p. 1)

---

## 2. Parties

**Plaintiff — Ashley St. Clair**  
- Alleged New York resident; public figure on X; mother. (`gov.uscourts.nysd.656279.1.1.txt`, Compl. ¶¶ 7, 19; `gov.uscourts.nysd.656279.7-5.txt`, Aff. ¶¶ 1–3)  
- **Counsel (record):** C.A. Goldberg PLLC (Carrie Goldberg, Laura Hecht-Felella, Naomi Leeds). (`gov.uscourts.nysd.656279.1.1.txt` at complaint signature block)

**Defendants (pleadings as reflected in this archive)**  
- **Original removed action:** X.AI Holdings Corp. only (complaint caption). (`gov.uscourts.nysd.656279.1.1.txt` caption)  
- **Later federal filings** name **X.AI Holdings Corp., X.AI LLC, and X.AI Corp.** (e.g., ECF 65 caption; federal summonses in ECF 44/45 headers).  
- **Defense counsel (record):** Holwell Shuster & Goldberg LLP (Michael S. Shuster, Daniel M. Sullivan, Gregory J. Dubinsky; Brian T. Goldman on certificates). (`gov.uscourts.nysd.656279.13.0.txt` signature block; `gov.uscourts.nysd.656279.82.0.txt`)

**Non-parties discussed in briefing**  
- **X Corp.** — operates X platform; terms of service at issue for transfer. (`gov.uscourts.nysd.656279.65.0.txt`, Background ¶¶ 1–2)  
- **Elon Musk** — referenced by plaintiff as xAI founder and as parent in common with plaintiff’s child; defendant filings reference corporate structure but do not adopt those characterizations for liability purposes. (`gov.uscourts.nysd.656279.7-1.txt` at p. 4; `gov.uscourts.nysd.656279.7-2.txt` ¶ 11)

**Related proceeding (described in filings, not in folder)**  
- **X.AI LLC et al. v. St. Clair**, No. 7:26-cv-00005 (N.D. Tex.), filed January 15, 2026 — cited for first-filed rule and anticipatory-filing arguments. (`gov.uscourts.nysd.656279.13.0.txt` at pp. 3–4; `gov.uscourts.nysd.656279.92.0.txt` at p. 1)

---

## 3. Factual background

*The following tracks allegations and sworn statements in the record; it is not a finding of fact.*

### 3.1 Plaintiff’s version (complaint, affirmations, emergency memos)

- **Grok / X role:** Complaint alleges defendant xAI owns both **X** and **Grok**; Grok can edit uploads into sexualized deepfakes; “spicy mode”; integration with X; reporting failures; monetization and verification stripped. (`gov.uscourts.nysd.656279.1.1.txt`, Compl. ¶¶ 9–34)  
- **January 2025 incident:** On or about **January 4, 2025**, plaintiff discovered a Grok post altering her photo to a string bikini after a verified user asked for “bikinis on these three broads”; plaintiff objected publicly; Grok called it “humorous,” said removal was requested, then stated future use would require “explicit consent”—alleged false. (`gov.uscourts.nysd.656279.1.1.txt`, Compl. ¶¶ 20–24)  
- **Escalation:** Alleged flood of deepfakes including minor-age photo edits, semen/bikini imagery, swastika bikini, clown costume with semen; reports to X allegedly returned no violation; warnings on plaintiff’s replies; Premium removed, verification removed, demonetization, later ban from purchasing Premium. (`gov.uscourts.nysd.656279.1.1.txt`, Compl. ¶¶ 25–34)  
- **Personal detail:** Plaintiff memo and Goldberg affirmation state she shares a young child with xAI’s founder and faces targeted harassment from fans. (`gov.uscourts.nysd.656279.7-1.txt` at p. 4; `gov.uscourts.nysd.656279.7-2.txt` ¶ 11)  
- **Plaintiff affirmation (state/federal filing):** Largely mirrors complaint facts; **¶ 5 gives January 4, 2025** as date of first discovered Grok alteration. (`gov.uscourts.nysd.656279.7-5.txt` ¶ 5)

### 3.2 Defendant’s version (opposition, declarations as far as present)

- **Corporate roles:** xAI Holdings is **parent**; does **not** operate Grok or X; **xAI LLC** operates Grok; **X Corp.** operates X. (`gov.uscourts.nysd.656279.17.0.txt` at pp. 8–9; `gov.uscourts.nysd.656279.23.0.txt` ¶ 1)  
- **User-generated content:** Objectionable imagery came from **X users** prompting Grok account on X; emphasizes third-party prompts and images. (`gov.uscourts.nysd.656279.17.0.txt` at pp. 16–19)  
- **Remediation:** States identified posts removed; policy changes (including January 7, 2026 restrictions on bikini edits on @Grok on X; further January 19, 2026 safeguards in Murphy reply declaration). (`gov.uscourts.nysd.656279.17.0.txt` at pp. 13–15; `gov.uscourts.nysd.656279.23.0.txt` ¶¶ 13–14)  
- **Account / TOS:** Murphy declarations state plaintiff created **xAI account December 10, 2024** via X login; assent screen; continued Grok use including **January 4, 2026** prompt to @Grok. (`gov.uscourts.nysd.656279.23.0.txt` ¶¶ 4–10)  
- **Monetization:** Birkenfeld-Malpass declaration cited for **$10,856.24** ad revenue share in 2025 (re relevance to irreparable harm). (`gov.uscourts.nysd.656279.17.0.txt` at p. 15)

### 3.3 Record inconsistencies / corroboration

| Topic | Observation | Sources |
|--------|-------------|---------|
| Date of initial deepfake discovery | **2025** in complaint, plaintiff memo, plaintiff affirm.; **2026** in Goldberg attorney affirm. ¶ 10 | `1.1.txt` ¶ 20; `7-1.txt` p. 3; `7-5.txt` ¶ 5; `7-2.txt` ¶ 10 |
| Who “owns” X | Complaint alleges xAI owns X; defense says X Corp. operates X, Holdings does not operate either service | `1.1.txt` ¶ 9; `17.0.txt` pp. 8–9 |
| State of NYS filings | NYSCEF pages state **not yet reviewed by County Clerk** | Multiple pages in `1.1.txt` |

---

## 4. Causes of action (original complaint in removed state action)

All counts are against **X.AI Holdings Corp.** (`gov.uscourts.nysd.656279.1.1.txt`, Causes of Action section)

1. **Strict liability — design defect** (`1.1.txt` ¶¶ 35–41)  
2. **Strict liability — manufacturing defect** (`1.1.txt` ¶¶ 42–48)  
3. **Strict liability — marketing defect / failure to warn** (`1.1.txt` ¶¶ 49–57)  
4. **NY GBL § 349** — deceptive practices (`1.1.txt` ¶¶ 58–64)  
5. **Negligence** (`1.1.txt` ¶¶ 65–78)  
6. **Unjust enrichment** (`1.1.txt` ¶¶ 79–84)  
7. **Intentional infliction of emotional distress** (`1.1.txt` ¶¶ 85–90)  
8. **NY Civil Rights Law § 52-c** — intimate image dissemination (`1.1.txt` ¶¶ 91–95)  
9. **Public nuisance** (`1.1.txt` ¶¶ 96–100)

**Relief sought:** Compensatory and punitive damages, prejudgment interest, costs and fees (including attorneys’ fees), injunctive relief, other relief. (`1.1.txt` WHEREFORE at pp. 14–15)

**Note:** Defense briefing references a **First Amended Complaint** filed **February 3, 2026** (Dkt. 36) naming additional defendants and revised allegations. **`gov.uscourts.nysd.656279.*` does not include Dkt. 36**; causes of action in the operative federal complaint cannot be verified from this archive.

---

## 5. Affirmative defenses and counterclaims

- **No answer** appears in the provided RECAP set.  
- **Reservation of defenses:** Removal notice states defendant does not waive defenses. (`gov.uscourts.nysd.656279.1.0.txt` ¶ 19)  
- **Arguments functioning as defenses** are advanced in the **transfer** and **preliminary injunction opposition** memoranda: **§ 230** immunity, **failure to sue correct entity**, **Texas choice of law** via forum-selection clause, **service vs. product** characterization, **First Amendment** limits on injunctive relief, **lack of intent** for IIED, etc. (`gov.uscourts.nysd.656279.17.0.txt`, Argument Sections II–III)  
- **Counterclaims:** Not pled in the reviewed defendant memoranda; Texas action described as separate suit for breach of forum-selection clause / related theories. (`gov.uscourts.nysd.656279.13.0.txt` at p. 3)

---

## 6. Key motions and rulings

| Item | Relief requested | Key ruling / status | Authority in folder |
|------|------------------|---------------------|---------------------|
| **Notice of removal** | Federal jurisdiction; attach state pleadings | Filed 1/15/26 | `1.0.txt` |
| **TRO / preliminary injunction (ECF 7)** | Cease § 223-defined nonconsensual depictions; cease disclosure; no retaliation | **TRO denied** 1/16/26; OSC re PI; briefing & 1/26/26 call | `15.0.txt` |
| **Transfer venue § 1404 (ECF 13 + supplements)** | Transfer to N.D. Tex.; enforce xAI (and later X) TOS | **Pending** in this archive; extensive supplemental briefing through **ECF 91** | `13.0.txt`, `65.0.txt`, `91.0.txt` |
| **Opposition to PI (ECF 17)** | Deny PI or decline to rule until transfer | No dispositive order in folder after full briefing | `17.0.txt` |
| **Sealing / redaction (letters; ECF 28, 39, 56, 70, 78–80, etc.)** | Seal or redact personal data in transfer proofs | **2/13/26:** redact email/IP granted; broader sealing denied; refile (ECF 60); later letters granted redacted filings (ECF 74, 85–86, 88) | `60.0.txt`, `74.0.txt`, `46.0.txt` |
| **Further briefing on X TOS (ECF 61)** | Def. brief 2/18/26; Pl. reply 2/23/26 | Ordered | `61.0.txt` |
| **Post-hearing production (ECF 25)** | Records on X and xAI sign-up/assent by 1/30/26; supplemental brief 2/3/26; response 2/5/26; call 2/9/26 | Ordered | `25.0.txt` |
| **Simultaneous letters (ECF 90)** | Address supplemental submissions | Due **3/24/26**; **ECF 91–92** filed | `90.0.txt`, `91.0.txt`, `92.0.txt` |

**Ruling on merits:** None in file set beyond interim case management.

---

## 7. Critical evidence and exhibits (within this archive)

| Exhibit / filing | What the OCR shows | Why it matters |
|------------------|-------------------|---------------|
| **State complaint (ECF 1-1)** | Nine causes of action; detailed Grok/X allegations | Core liability theories and damages demands (`1.1.txt`) |
| **Goldberg affirm. (ECF 7-2)** | TRO logistics; narrative; **Jan 4, 2026** deepfake start date at ¶ 10 | **Conflicts** with complaint/plaintiff dates (`7-2.txt` ¶ 10 vs `1.1.txt` ¶ 20) |
| **St. Clair affirm. (ECF 7-5)** | First-person harm; **Jan 4, 2025** at ¶ 5 | Fact foundation for emergency motion (`7-5.txt`) |
| **Emails (ECF 7-3, 7-4)** | Notice to legal@x.ai; Shuster response | Service / notice dispute foundation (`7-3.txt`, `7-4.txt`) |
| **Murphy declarations (ECF 23, 34)** | Account creation 12/10/24; screenshots (some redacted); TOS versions; Grok use | Forum selection / contract formation (`23.0.txt`, `34.0.txt`) |
| **xAI TOS excerpts (ECF 23-1, 23-2)** | Texas forum; affiliate third-party beneficiary language (as excerpted) | Transfer motion foundation (`23-1.txt`, `23-2.txt`) |
| **Birkenfeld-Malpass materials (cited in ECF 17, 65)** | Post removal; revenue; corporate structure; X TOS Version 21 text in memo | § 230 / PI opposition; X TOS enforcement (`17.0.txt`, `65.0.txt`) |
| **March 24 letters (ECF 91–92)** | Dense debate on Version 20 vs 21, “Got It” clicks, UTC vs local time, “ghost pings,” Sony *Fujifilm* draft | **Active contested facts** on assent (`91.0.txt`, `92.0.txt`) |

---

## 8. Legal issues to watch

1. **§ 1404 + Atlantic Marine** — mandatory forum-selection enforcement vs. plaintiff’s “unreasonable/unjust” arguments; **first-filed** Texas case and any **anticipatory filing** exception (plaintiff references Doc. 16; not in folder). (`13.0.txt`; `92.0.txt` at p. 1)  
2. **Non-signatory enforcement** — **Fasano / Magi** “closely related” doctrine vs. **express third-party beneficiary** language in X TOS Version 21. (`65.0.txt` Sections I–II)  
3. **Stacked contracts** — xAI TOS vs. X TOS; whether xAI can enforce **X** terms when X is not a defendant; **affiliate** definition (Vine/Twitpic discussion in plaintiff letter). (`65.0.txt`; `92.0.txt` at pp. 1–2)  
4. **Online assent** — **Meyer v. Uber**-style clickwrap vs. plaintiff’s **time-zone** and **no genuine use** arguments. (`91.0.txt`; `92.0.txt` at pp. 2–3)  
5. **§ 230** — generative AI output as **ICP vs. platform speech**; *Herrick*, *Force v. Facebook* line; senator statement rejected by defense. (`7-1.txt` at pp. 6–7; `17.0.txt` at pp. 15–21)  
6. **Product liability over software / speech** — Texas and Restatement § 19; *Way v. Boy Scouts*. (`17.0.txt` at pp. 22–23)  
7. **First Amendment / prior restraint** — breadth of “harassment” and “retaliation” injunction terms; *Moody v. NetChoice*, *Volokh v. James*. (`17.0.txt` at pp. 26–28)  
8. **Corporate liability / parent-subsidiary** — Texas law on parent not liable for subsidiary absent piercing (cited in opposition). (`17.0.txt` at p. 21)  
9. **Choice of law** — contract vs. complaint pleading New York statutes. (`17.0.txt` at pp. 21–26)  

---

## 9. Strengths and weaknesses by side

**Plaintiff (record-based)**  
- **Strengths:** Detailed factual narrative of harm; multiple state-law theories; emergency papers frame statutory terms (47 U.S.C. § 223); corroborating first-person affirmation; public-order argument that sealing obscures weak proofs (`46.0.txt`).  
- **Weaknesses:** Internal **date inconsistency** (2025 vs 2026) (`7-2.txt` ¶ 10 vs `1.1.txt` ¶ 20); early complaint alleges **xAI owns X** contrary to defense structure (`1.1.txt` ¶ 9 vs `17.0.txt`); **§ 230** and **correct defendant** challenges flagged heavily in opposition; monetization harm framed as **compensable in money** by defendant (`17.0.txt` at p. 15).

**Defense (record-based)**  
- **Strengths:** Systematic **forum-selection** and **first-filed** strategy; **§ 1404** briefing; declarations on **account creation** and **TOS**; remedial **product changes** before/during suit (`17.0.txt`); **parent non-operational** argument (`17.0.txt` at p. 21); strong **§ 230** and **First Amendment** framing for PI.  
- **Weaknesses:** Fact-intensive **assent** and **log interpretation** disputed (UTC, “ghost pings,” post-filing “study” visits) (`92.0.txt`); plaintiff alleges **selective evidence** and **encryption** of logs (`77.0.txt` at p. 1); risk that **relationship** allegations in complaint undermine “stranger to X contract” story (`65.0.txt` citing Dkt. 36 ¶¶ — FAC not in folder).

---

## 10. Open questions and gaps

- **Final decision** on § 1404 transfer and preliminary injunction **not** in archive through ECF 92.  
- **First Amended Complaint (Dkt. 36)** and many cited submissions **absent**; operative claims uncertain.  
- **Transcript** of January 27, 2026 conference referenced (`39.0.txt` at p. 1; `65.0.txt` citing Dkt. 26) — **not provided** here.  
- **Answer / Rule 12 motion** — defendant sought extension keyed to transfer outcome (`81.0.txt`); resolution not shown.  
- **Anomalous ECF 62 PDF** — wrong case caption; do not rely on it for St. Clair. (`62.0.txt`)  
- **Sealed or heavily redacted** materials: court permitted sealing/redaction for IP/email; full substantive content of sealed PDFs **not** visible in public OCR extracts.

---

## 11. Bottom line for a practitioner

This file set captures the **opening weeks** of a high-profile **AI / deepfake / platform** dispute removed to SDNY, where the court **refused ex parte TRO relief** but set a **preliminary injunction** track. The defense has **front-loaded venue**: **N.D. Texas** under **§ 1404** and parallel **Texas litigation**, relying on a **network of integrated terms** (xAI Grok TOS + updated X TOS) and **affiliate third-party beneficiary** clauses. The plaintiff resists on **contract formation**, **non-signatory enforcement**, **timezone/log reliability**, and **public-access** arguments, while pressing toward **merits** discovery. **No answer** and **no merits discovery** are reflected here; **§ 230**, **corporate-structure**, and **First Amendment** themes already frame the likely dispositive motions if the case remains in federal court.

---

*Prepared exclusively from the RECAP OCR texts in `St. Clair v. X.AI Holdings Corp., 1-26-cv-00386`. Citations above map to those filenames for linear search (`gov.uscourts.nysd.656279.*.txt`).*
