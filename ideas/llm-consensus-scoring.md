# Multi-LLM Consensus Scoring Framework

## The Core Insight
LLMs are sophisticated statistical models of human language patterns. They've ingested everything: books, journals, internet, erotic literature, theological texts, graffiti transcriptions, academic papers. An LLM's probability distribution over "which words follow this context" is literally a compression of human attitudes about that context.

**Therefore**: Asking an LLM to score a word's negativity/positivity is not cheating. It's asking the world's most comprehensive linguistic database what it learned about how humans use that word.

## The Infrastructure Problem

To run the Sexual Language Index project, we need:
1. CLI access to multiple LLM APIs (Claude, GPT-4, Gemini, Grok, Llama, etc.)
2. A standardized prompt that generates consistent, comparable scores across models
3. A way to batch-run 20,000+ scoring calls without hitting rate limits
4. Cost optimization (~$20–30 total budget)

## Phase 1: Determine Which APIs to Use

Research and set up accounts:
- Claude (Anthropic) — via CLI
- GPT-4o (OpenAI) — via API
- Gemini 2.0 (Google) — via CLI or API
- Grok (xAI) — via API
- Llama (Meta) — via Bedrock, Groq, or Together AI (cheapest)
- Yi, Qwen (open source, cheap hosts)
- Maybe: LLaMA 2, Mistral via various providers

**Goal**: Pick 10 models that cover:
- Different training philosophies (OpenAI vs. open source vs. Anthropic)
- Different levels of fine-tuning/RLHF
- Cost efficiency
- Reliability

## Phase 2: Design the Scoring Prompt

Prompt structure (temperature=0, for consistency):

```
You are analyzing how a specific word is used in human language and culture.

Context: We are researching how sexually open or sexually closed different cultures are.
We measure this by analyzing the language people use around sexuality.

Your task: Score how negative/positive a specific word is when used in the context of sexuality.

Word: [WORD]
Language: [LANGUAGE]

Respond with ONLY a whole number from 0 to 100, where:
- 0-20: Positive, celebratory, or clinical/technical (good connotation or neutral)
- 21-40: Mostly neutral or mixed
- 41-60: Somewhat negative or derogatory
- 61-80: Very negative, strong insult
- 81-100: Extremely offensive, taboo

Respond with ONLY the number, nothing else.
```

Test this prompt with all 10 models on the same 5 words (across 3 languages) to check variance and calibration.

## Phase 3: Batch Scoring Infrastructure

Set up a script that:
1. Reads word list from CSV (word, language, category)
2. Loops through each word × 10 models
3. Fires API calls in parallel (respecting rate limits)
4. Stores results in a database (CSV or JSON)
5. Handles retries and errors
6. Logs cost and execution time

Estimated execution: 30-60 minutes, depending on rate limiting.

## Phase 4: Analysis Layer

Once all scores are in:
1. Calculate mean score per word across 10 models
2. Calculate standard deviation (shows disagreement)
3. Aggregate by language and category
4. Build the Sexual Openness Ratio (see sexual-language-index.md)

### Interesting secondary outputs:
- "Which models are most/least prudish?" (Grok vs. Claude comparison)
- "Where do models most disagree?" (controversial words)
- "How much does language context matter?" (score "cock" vs. "cockerel")

## The Real Work

This whole infrastructure is setup work. Once it's built, it's reusable for:
- The Sexual Language Index project
- Other LLM consensus tasks
- Bias analysis across models
- Cultural attitude surveys via language

Could become its own toolkit.

## Cost Estimate

- Claude: ~$5 (100k tokens @ $0.8/1M input)
- GPT-4o: ~$2 (100k tokens @ $5/1M input)
- Gemini: ~$0.50
- Grok: ~$3
- Llama (via Groq): ~$0.10
- Others: ~$5–10
- **Total: ~$20–30**

## Dependencies

This is **blocking** work. Sexual Language Index needs this built first.

But it could also be its own exploratory project: "Building a Multi-LLM Consensus Scoring Framework" with output being the infrastructure itself + a sample analysis on any domain (sexuality, toxicity, sentiment, etc.).
