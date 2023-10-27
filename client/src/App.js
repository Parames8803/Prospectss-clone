import React from 'react';
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Pricing from './pages/Pricing';
import AffiliateNetwork from './pages/tools/AffiliateNetwork';
import B2BLeadsSearch from "./pages/tools/B2BLeadsSearch"
import BlogAuthorFinder from "./pages/tools/BlogAuthorFinder"
import BulkBlogAuthor from "./pages/tools/BulkBlogAuthor"
import BulkDomainSearch from "./pages/tools/BulkDomainSearch"
import BulkFindEmails from "./pages/tools/BulkFindEmails"
import BulkVerifyEmails from "./pages/tools/BulkVerifyEmails"
import DomainEmailSearch from "./pages/tools/DomainEmailSearch"
import EmailExractorExtension from "./pages/tools/EmailExtractorExtension"
import FbAdHidden from "./pages/tools/FbAdHidden"
import YoutubeChannel from "./pages/tools/YoutubeChannel"
import YellowPagesScraper from "./pages/tools/YellowPagesScraper"
import YCStartup from "./pages/tools/YCStartup"
import WhatsappGroup from "./pages/tools/WhatsappGroup"
import WhatsappAuto from "./pages/tools/WhatsappAuto"
import WebsiteTechnologyExtension from "./pages/tools/WebsiteTechnologyExtension"
import WebsiteTechnologyChecker from "./pages/tools/WebsiteTechnologyChecker"
import VerifyEmails from "./pages/tools/VerifyEmails"
import TwitterFollower from "./pages/tools/TwitterFollower"
import TwitterAutoMass from "./pages/tools/TwitterAutoMass"
import TikTokFollower from "./pages/tools/TikTokFollower"
import StartupSubmission from "./pages/tools/StartupSubmission"
import SlackMember from "./pages/tools/SlackMember"
import SlackGroup from "./pages/tools/SlackGroup"
import SearchEmailByDomain from "./pages/tools/SearchEmailByDomain"
import QuoraQuestionFinder from "./pages/tools/QuoraQuestionFinder"
import PhoneNumberVerify from "./pages/tools/PhoneNumberVerify"
import PHFollower from "./pages/tools/PHFollower"
import PHCommentProfile from "./pages/tools/PHCommentProfile"
import LinkedinPoll from "./pages/tools/LinkedinPoll"
import LinkedinGroupMember from "./pages/tools/LinkedinGroupMember"
import LinkedinGroup from "./pages/tools/LinkedinGroup"
import LinkedinEmail from "./pages/tools/LinkedinEmail"
import InstagramProfile from "./pages/tools/InstagramProfile"
import InstagramPostLike from "./pages/tools/InstagramPostLike"
import InstagramHashtagScraper from "./pages/tools/InstagramHashtagScraper"
import InstagramHashtagGenerator from "./pages/tools/InstagramHashtagGenerator"
import InstagramFollower from "./pages/tools/InstagramFollower"
import InstagramAutoMsg from "./pages/tools/InstagramAutoMsg"
import InstagramAutoFollow from "./pages/tools/InstagramAutoFollow"
import GuestPost from "./pages/tools/GuestPost"
import GuestBloggingOpportunities from "./pages/tools/GuestBloggingOpportunities"
import FindEmails from "./pages/tools/FindEmails"
import FbGroupMember from "./pages/tools/FbGroupMember"
import FbGroup from "./pages/tools/FbGroup"
import FbAutoMsgSender from "./pages/tools/FbAutoMsgSender"
import FbAutoFriend from "./pages/tools/FbAutoFriend"
import Tool from './pages/Tool';
import Authorization from "./pages/Authorization"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authorize" element={<Authorization/>}/>
          <Route path="/update-plans" element={<Pricing />} />
          <Route path='/find-emails' element={<FindEmails />} />
          <Route path='/search-email-by-domain' element={<SearchEmailByDomain />} />
          <Route path='/affiliate-network-list' element={<Tool Component={AffiliateNetwork} Title={"Top Questions for Affiliate Network List"} Object={[
            {
              id: 1,
              isOpen: false,
              quest: "How to make use of this list?",
              ans: "Often getting affiliates to signup for your business is a daunting task. With the help of Affiliate Network List you get access to Top 49 Affiliates classified based on the niche & region. You can check each network and signup to bring in affiliates for your business.",
            },
            {
              id: 2,
              idOpen: false,
              quest: "What are the benefits of Affiliate Marketing?",
              ans: "Affiliate Marketing is vital for any business as it helps you build a network for your business & grow.",
            },
          ]} />} />
          <Route path='/b2b-lead-search' element={<B2BLeadsSearch />} />
          <Route path='/blog-author-finder' element={<BlogAuthorFinder />} />
          <Route path='/bulk-blog-author' element={<BulkBlogAuthor />} />
          <Route path='/bulk-domain-search' element={<BulkDomainSearch />} />
          <Route path='/bulk-find-email' element={<BulkFindEmails />} />
          <Route path='/bulk-verify-email' element={<BulkVerifyEmails />} />
          <Route path='/domain-email-search' element={<DomainEmailSearch />} />
          <Route path='/email-extractor-extension' element={<EmailExractorExtension />} />
          <Route path='/facebook-ad-hidden-interest-finder' element={<FbAdHidden />} />
          <Route path='/facebook-auto-friend-request-sender' element={<FbAutoFriend />} />
          <Route path='/facebook-auto-message-sender' element={<FbAutoMsgSender />} />
          <Route path='/facebook-group-list' element={<FbGroup />} />
          <Route path='/fb-group-member-extractor' element={<FbGroupMember />} />
          <Route path='/guest-blogging' element={<GuestBloggingOpportunities />} />
          <Route path='/guest-post' element={<GuestPost />} />
          <Route path='/instagram-auto-follow-unfollow-tool' element={<InstagramAutoFollow />} />
          <Route path='/instagram-auto-message-sender' element={<InstagramAutoMsg />} />
          <Route path='//instagram-follower-scraper' element={<InstagramFollower />} />
          <Route path='/instagram-hashtag-generator' element={<InstagramHashtagGenerator />} />
          <Route path='/instagram-hashtag-scraper' element={<InstagramHashtagScraper />} />
          <Route path='/instagram-post-scraper' element={<InstagramPostLike />} />
          <Route path='/instagram-profile-scraper' element={<InstagramProfile />} />
          <Route path='/linkedin-email-finder' element={<LinkedinEmail />} />
          <Route path='/linkedin-group-list' element={<LinkedinGroup />} />
          <Route path='/linkedin-group-member-extractor' element={<LinkedinGroupMember />} />
          <Route path='/linkedin-poll-extractor' element={<LinkedinPoll />} />
          <Route path='/producthunt-comment-profile-scraper' element={<PHCommentProfile />} />
          <Route path='/producthunt-follower-scraper' element={<PHFollower />} />
          <Route path='/phone-number-verify' element={<PhoneNumberVerify />} />
          <Route path='/quora-question-finder' element={<QuoraQuestionFinder />} />
          <Route path='/slack-group-list' element={<SlackGroup />} />
          <Route path='/slack-member-email-extractor' element={<SlackMember />} />
          <Route path='/startup-submission' element={<StartupSubmission />} />
          <Route path='/scrape-tiktok-follower' element={<TikTokFollower />} />
          <Route path='/twitter-auto-mass-dm-message-sender' element={<TwitterAutoMass />} />
          <Route path='/twitter-follower-email-finder' element={<TwitterFollower />} />
          <Route path='/verify-emails' element={<VerifyEmails />} />
          <Route path='/website-technology-checker' element={<WebsiteTechnologyChecker />} />
          <Route path='/website-technology-extension' element={<WebsiteTechnologyExtension />} />
          <Route path='/whatsapp-auto-message-sender' element={<WhatsappAuto />} />
          <Route path='/whatsapp-group-scraper' element={<WhatsappGroup />} />
          <Route path='/yc-startup-list' element={<YCStartup />} />
          <Route path='/yellow-pages-scraper' element={<YellowPagesScraper />} />
          <Route path='/youtube-channel-scraper' element={<YoutubeChannel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
