"use strict";(self.webpackChunksolana_web3_demo=self.webpackChunksolana_web3_demo||[]).push([[8630],{2111:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-e8835796",path:"/zh/advanced/send-tx.html",title:"Send Tx",lang:"zh-TW",frontmatter:{},excerpt:"",headers:[],filePathRelative:"zh/advanced/send-tx.md",git:{updatedTime:1636285795e3,contributors:[{name:"yihau",email:"a122092487@gmail.com",commits:1}]}}},4447:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="send-tx" tabindex="-1"><a class="header-anchor" href="#send-tx" aria-hidden="true">#</a> Send Tx</h1><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  Keypair<span class="token punctuation">,</span>\n  Transaction<span class="token punctuation">,</span>\n  SystemProgram<span class="token punctuation">,</span>\n  sendAndConfirmTransaction<span class="token punctuation">,</span>\n  sendAndConfirmRawTransaction<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/web3.js&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">CONNECTION</span><span class="token punctuation">,</span> <span class="token constant">FEE_PAYER</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../helper/const&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 發送tx</span>\n\n<span class="token comment">// 在前面的例子我們都是用用sendTransaction的方式來發送交易，這邊介紹另外兩種方式</span>\n<span class="token comment">// 可以依照不同情況自己選擇要使用哪一種</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 這邊拿transfer的tx當作例子</span>\n  <span class="token keyword">let</span> to <span class="token operator">=</span> Keypair<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">to: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>to<span class="token punctuation">.</span>publicKey<span class="token punctuation">.</span><span class="token function">toBase58</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> tx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  tx<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>\n    SystemProgram<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      fromPubkey<span class="token operator">:</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      toPubkey<span class="token operator">:</span> to<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>\n      lamports<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  tx<span class="token punctuation">.</span>feePayer <span class="token operator">=</span> <span class="token constant">FEE_PAYER</span><span class="token punctuation">.</span>publicKey<span class="token punctuation">;</span>\n\n  <span class="token comment">// 1. 簽名 + 發送</span>\n  <span class="token comment">// 只管發出交易，不管鏈上區塊狀況 (前面的基礎範例都是使用這種)</span>\n  <span class="token comment">// console.log(`txhash: ${await CONNECTION.sendTransaction(tx, [FEE_PAYER])}`);</span>\n\n  <span class="token comment">// 2. 簽名 + 發送 + 確認</span>\n  <span class="token comment">// 這個方法會等到區塊確認完成之後才會回傳txhash</span>\n  <span class="token comment">// console.log(`txhash: ${await sendAndConfirmTransaction(CONNECTION, tx, [FEE_PAYER])}`);</span>\n\n  <span class="token comment">// 3. 簽名 =&gt; 發送</span>\n  <span class="token comment">// 前兩種方式都是web3幫我們包好的方法，可以一鍵發送交易</span>\n  <span class="token comment">// 第三種比較接近跟原始的rpc互動</span>\n  <span class="token comment">// 對這種方法有概念後轉去其他的語言開發比較不會卡關</span>\n  <span class="token comment">// 在上面設定完 instruction 和 feePayer之後</span>\n  <span class="token comment">// 這邊會需要再多設定一個東西 `blockhash`</span>\n  <span class="token comment">// solana在發送交易時會需要將最近的blockhash包進tx內一起簽名送出</span>\n  <span class="token comment">// 如果鏈上發現你帶的blockhash距離鏈上最新的blockhash太遠的話</span>\n  <span class="token comment">// 會直接拒絕tx，如果你有需要暫存交易一陣子才發出的需求，可以參閱durable nonce篇的介紹</span>\n\n  <span class="token comment">// a. recent blockhash</span>\n  tx<span class="token punctuation">.</span>recentBlockhash <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token constant">CONNECTION</span><span class="token punctuation">.</span><span class="token function">getRecentBlockhash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>blockhash<span class="token punctuation">;</span>\n\n  <span class="token comment">// b. 簽名</span>\n  tx<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token constant">FEE_PAYER</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// c. 序列化交易</span>\n  <span class="token keyword">const</span> rawTx <span class="token operator">=</span> tx<span class="token punctuation">.</span><span class="token function">serialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// d. base64 encode</span>\n  <span class="token keyword">const</span> encodedTransaction <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>rawTx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&quot;base64&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">txhash: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">await</span> <span class="token constant">CONNECTION</span><span class="token punctuation">.</span><span class="token function">sendEncodedTransaction</span><span class="token punctuation">(</span>encodedTransaction<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// d步驟可以使用以下方法取代，上面是為了把完整步驟真實呈現</span>\n  <span class="token comment">// console.log(`txhash: ${await CONNECTION.sendRawTransaction(rawTx)}`);</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div>',2),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);