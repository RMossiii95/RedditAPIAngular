// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Welcome {
    kind: string;
    data: WelcomeData;
}

export interface WelcomeData {
    after:      string;
    dist:       number;
    modhash:    string;
    geo_filter: null;
    children:   Child[];
    before:     null;
}

export interface Child {
    kind: Kind;
    data: ChildData;
}

export interface ChildData {
    approved_at_utc:               null;
    subreddit:                     Subreddit;
    selftext:                      string;
    author_fullname:               string;
    saved:                         boolean;
    mod_reason_title:              null;
    gilded:                        number;
    clicked:                       boolean;
    title:                         string;
    link_flair_richtext:           any[];
    subreddit_name_prefixed:       SubredditNamePrefixed;
    hidden:                        boolean;
    pwls:                          number;
    link_flair_css_class:          null | string;
    downs:                         number;
    thumbnail_height:              number;
    top_awarded_type:              null | string;
    hide_score:                    boolean;
    name:                          string;
    quarantine:                    boolean;
    link_flair_text_color:         FlairTextColor;
    upvote_ratio:                  number;
    author_flair_background_color: null | string;
    subreddit_type:                SubredditType;
    ups:                           number;
    total_awards_received:         number;
    media_embed:                   MediaEmbed;
    thumbnail_width:               number;
    author_flair_template_id:      null | string;
    is_original_content:           boolean;
    user_reports:                  any[];
    secure_media:                  Media | null;
    is_reddit_media_domain:        boolean;
    is_meta:                       boolean;
    category:                      null;
    secure_media_embed:            MediaEmbed;
    link_flair_text:               null;
    can_mod_post:                  boolean;
    score:                         number;
    approved_by:                   null;
    is_created_from_ads_ui:        boolean;
    author_premium:                boolean;
    thumbnail:                     string;
    edited:                        boolean;
    author_flair_css_class:        null | string;
    author_flair_richtext:         FlairRichtext[];
    gildings:                      DataGildings;
    post_hint:                     PostHint;
    content_categories:            null;
    is_self:                       boolean;
    mod_note:                      null;
    created:                       number;
    link_flair_type:               AuthorFlairType;
    wls:                           number;
    removed_by_category:           null;
    banned_by:                     null;
    author_flair_type:             AuthorFlairType;
    domain:                        Domain;
    allow_live_comments:           boolean;
    selftext_html:                 null;
    likes:                         null;
    suggested_sort:                null | string;
    banned_at_utc:                 null;
    url_overridden_by_dest:        string;
    view_count:                    null;
    archived:                      boolean;
    no_follow:                     boolean;
    is_crosspostable:              boolean;
    pinned:                        boolean;
    over_18:                       boolean;
    preview:                       Preview;
    all_awardings:                 AllAwarding[];
    awarders:                      any[];
    media_only:                    boolean;
    can_gild:                      boolean;
    spoiler:                       boolean;
    locked:                        boolean;
    author_flair_text:             null | string;
    treatment_tags:                string[];
    visited:                       boolean;
    removed_by:                    null;
    num_reports:                   null;
    distinguished:                 null;
    subreddit_id:                  SubredditID;
    author_is_blocked:             boolean;
    mod_reason_by:                 null;
    removal_reason:                null;
    link_flair_background_color:   string;
    id:                            string;
    is_robot_indexable:            boolean;
    report_reasons:                null;
    author:                        string;
    discussion_type:               null;
    num_comments:                  number;
    send_replies:                  boolean;
    whitelist_status:              WhitelistStatus;
    contest_mode:                  boolean;
    mod_reports:                   any[];
    author_patreon_flair:          boolean;
    author_flair_text_color:       FlairTextColor | null;
    permalink:                     string;
    parent_whitelist_status:       WhitelistStatus;
    stickied:                      boolean;
    url:                           string;
    subreddit_subscribers:         number;
    created_utc:                   number;
    num_crossposts:                number;
    media:                         Media | null;
    is_video:                      boolean;
    crosspost_parent_list?:        CrosspostParentList[];
    crosspost_parent?:             string;
}

export interface AllAwarding {
    giver_coin_reward:                    number | null;
    subreddit_id:                         null;
    is_new:                               boolean;
    days_of_drip_extension:               number;
    coin_price:                           number;
    id:                                   string;
    penny_donate:                         number | null;
    award_sub_type:                       AwardSubType;
    coin_reward:                          number;
    icon_url:                             string;
    days_of_premium:                      number;
    tiers_by_required_awardings:          { [key: string]: TiersByRequiredAwarding } | null;
    resized_icons:                        ResizedIcon[];
    icon_width:                           number;
    static_icon_width:                    number;
    start_date:                           null;
    is_enabled:                           boolean;
    awardings_required_to_grant_benefits: number | null;
    description:                          string;
    end_date:                             null;
    subreddit_coin_reward:                number;
    count:                                number;
    static_icon_height:                   number;
    name:                                 string;
    resized_static_icons:                 ResizedIcon[];
    icon_format:                          Format | null;
    icon_height:                          number;
    penny_price:                          number | null;
    award_type:                           AwardType;
    static_icon_url:                      string;
}

export enum AwardSubType {
    Appreciation = "APPRECIATION",
    Global = "GLOBAL",
    Group = "GROUP",
    Premium = "PREMIUM",
}

export enum AwardType {
    Global = "global",
}

export enum Format {
    Apng = "APNG",
    PNG = "PNG",
}

export interface ResizedIcon {
    url:     string;
    width:   number;
    height:  number;
    format?: Format | null;
}

export interface TiersByRequiredAwarding {
    resized_icons:        ResizedIcon[];
    awardings_required:   number;
    static_icon:          ResizedIcon;
    resized_static_icons: ResizedIcon[];
    icon:                 ResizedIcon;
}

export interface FlairRichtext {
    e: AuthorFlairType;
    t: string;
}

export enum AuthorFlairType {
    Richtext = "richtext",
    Text = "text",
}

export enum FlairTextColor {
    Dark = "dark",
}

export interface CrosspostParentList {
    approved_at_utc:               null;
    subreddit:                     string;
    selftext:                      string;
    author_fullname:               string;
    saved:                         boolean;
    mod_reason_title:              null;
    gilded:                        number;
    clicked:                       boolean;
    title:                         string;
    link_flair_richtext:           FlairRichtext[];
    subreddit_name_prefixed:       string;
    hidden:                        boolean;
    pwls:                          number;
    link_flair_css_class:          null | string;
    downs:                         number;
    thumbnail_height:              number;
    top_awarded_type:              null;
    hide_score:                    boolean;
    name:                          string;
    quarantine:                    boolean;
    link_flair_text_color:         FlairTextColor;
    upvote_ratio:                  number;
    author_flair_background_color: null | string;
    ups:                           number;
    total_awards_received:         number;
    media_embed:                   MediaEmbed;
    thumbnail_width:               number;
    author_flair_template_id:      null | string;
    is_original_content:           boolean;
    user_reports:                  any[];
    secure_media:                  Media | null;
    is_reddit_media_domain:        boolean;
    is_meta:                       boolean;
    category:                      null;
    secure_media_embed:            MediaEmbed;
    link_flair_text:               null | string;
    can_mod_post:                  boolean;
    score:                         number;
    approved_by:                   null;
    is_created_from_ads_ui:        boolean;
    author_premium:                boolean;
    thumbnail:                     string;
    edited:                        boolean;
    author_flair_css_class:        null;
    author_flair_richtext:         FlairRichtext[];
    gildings:                      CrosspostParentListGildings;
    post_hint:                     PostHint;
    content_categories:            null;
    is_self:                       boolean;
    subreddit_type:                SubredditType;
    created:                       number;
    link_flair_type:               AuthorFlairType;
    wls:                           number;
    removed_by_category:           null;
    banned_by:                     null;
    author_flair_type:             AuthorFlairType;
    domain:                        Domain;
    allow_live_comments:           boolean;
    selftext_html:                 null;
    likes:                         null;
    suggested_sort:                null | string;
    banned_at_utc:                 null;
    url_overridden_by_dest:        string;
    view_count:                    null;
    archived:                      boolean;
    no_follow:                     boolean;
    is_crosspostable:              boolean;
    pinned:                        boolean;
    over_18:                       boolean;
    preview:                       Preview;
    all_awardings:                 AllAwarding[];
    awarders:                      any[];
    media_only:                    boolean;
    link_flair_template_id?:       string;
    can_gild:                      boolean;
    spoiler:                       boolean;
    locked:                        boolean;
    author_flair_text:             null | string;
    treatment_tags:                any[];
    visited:                       boolean;
    removed_by:                    null;
    mod_note:                      null;
    distinguished:                 null;
    subreddit_id:                  string;
    author_is_blocked:             boolean;
    mod_reason_by:                 null;
    num_reports:                   null;
    removal_reason:                null;
    link_flair_background_color:   string;
    id:                            string;
    is_robot_indexable:            boolean;
    report_reasons:                null;
    author:                        string;
    discussion_type:               null;
    num_comments:                  number;
    send_replies:                  boolean;
    whitelist_status:              string;
    contest_mode:                  boolean;
    mod_reports:                   any[];
    author_patreon_flair:          boolean;
    author_flair_text_color:       FlairTextColor | null;
    permalink:                     string;
    parent_whitelist_status:       string;
    stickied:                      boolean;
    url:                           string;
    subreddit_subscribers:         number;
    created_utc:                   number;
    num_crossposts:                number;
    media:                         Media | null;
    is_video:                      boolean;
}

export enum Domain {
    DiscordGg = "discord.gg",
    IReddIt = "i.redd.it",
    VReddIt = "v.redd.it",
}

export interface CrosspostParentListGildings {
    gid_1?: number;
}

export interface Media {
    reddit_video: RedditVideo;
}

export interface RedditVideo {
    bitrate_kbps:       number;
    fallback_url:       string;
    height:             number;
    width:              number;
    scrubber_media_url: string;
    dash_url:           string;
    duration:           number;
    hls_url:            string;
    is_gif:             boolean;
    transcoding_status: TranscodingStatus;
}

export enum TranscodingStatus {
    Completed = "completed",
}

export interface MediaEmbed {
}

export enum PostHint {
    HostedVideo = "hosted:video",
    Image = "image",
    Link = "link",
}

export interface Preview {
    images:  Image[];
    enabled: boolean;
}

export interface Image {
    source:      ResizedIcon;
    resolutions: ResizedIcon[];
    variants:    Variants;
    id:          string;
}

export interface Variants {
    gif?: GIF;
    mp4?: GIF;
}

export interface GIF {
    source:      ResizedIcon;
    resolutions: ResizedIcon[];
}

export enum SubredditType {
    Public = "public",
}

export interface DataGildings {
    gid_1?: number;
    gid_2?: number;
}

export enum WhitelistStatus {
    AllAds = "all_ads",
}

export enum Subreddit {
    Aww = "aww",
}

export enum SubredditID {
    T52Qh1O = "t5_2qh1o",
}

export enum SubredditNamePrefixed {
    RAww = "r/aww",
}

export enum Kind {
    T3 = "t3",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toWelcome(json: string): Welcome {
        return cast(JSON.parse(json), r("Welcome"));
    }

    public static welcomeToJson(value: Welcome): string {
        return JSON.stringify(uncast(value, r("Welcome")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Welcome": o([
        { json: "kind", js: "kind", typ: "" },
        { json: "data", js: "data", typ: r("WelcomeData") },
    ], false),
    "WelcomeData": o([
        { json: "after", js: "after", typ: "" },
        { json: "dist", js: "dist", typ: 0 },
        { json: "modhash", js: "modhash", typ: "" },
        { json: "geo_filter", js: "geo_filter", typ: null },
        { json: "children", js: "children", typ: a(r("Child")) },
        { json: "before", js: "before", typ: null },
    ], false),
    "Child": o([
        { json: "kind", js: "kind", typ: r("Kind") },
        { json: "data", js: "data", typ: r("ChildData") },
    ], false),
    "ChildData": o([
        { json: "approved_at_utc", js: "approved_at_utc", typ: null },
        { json: "subreddit", js: "subreddit", typ: r("Subreddit") },
        { json: "selftext", js: "selftext", typ: "" },
        { json: "author_fullname", js: "author_fullname", typ: "" },
        { json: "saved", js: "saved", typ: true },
        { json: "mod_reason_title", js: "mod_reason_title", typ: null },
        { json: "gilded", js: "gilded", typ: 0 },
        { json: "clicked", js: "clicked", typ: true },
        { json: "title", js: "title", typ: "" },
        { json: "link_flair_richtext", js: "link_flair_richtext", typ: a("any") },
        { json: "subreddit_name_prefixed", js: "subreddit_name_prefixed", typ: r("SubredditNamePrefixed") },
        { json: "hidden", js: "hidden", typ: true },
        { json: "pwls", js: "pwls", typ: 0 },
        { json: "link_flair_css_class", js: "link_flair_css_class", typ: u(null, "") },
        { json: "downs", js: "downs", typ: 0 },
        { json: "thumbnail_height", js: "thumbnail_height", typ: 0 },
        { json: "top_awarded_type", js: "top_awarded_type", typ: u(null, "") },
        { json: "hide_score", js: "hide_score", typ: true },
        { json: "name", js: "name", typ: "" },
        { json: "quarantine", js: "quarantine", typ: true },
        { json: "link_flair_text_color", js: "link_flair_text_color", typ: r("FlairTextColor") },
        { json: "upvote_ratio", js: "upvote_ratio", typ: 3.14 },
        { json: "author_flair_background_color", js: "author_flair_background_color", typ: u(null, "") },
        { json: "subreddit_type", js: "subreddit_type", typ: r("SubredditType") },
        { json: "ups", js: "ups", typ: 0 },
        { json: "total_awards_received", js: "total_awards_received", typ: 0 },
        { json: "media_embed", js: "media_embed", typ: r("MediaEmbed") },
        { json: "thumbnail_width", js: "thumbnail_width", typ: 0 },
        { json: "author_flair_template_id", js: "author_flair_template_id", typ: u(null, "") },
        { json: "is_original_content", js: "is_original_content", typ: true },
        { json: "user_reports", js: "user_reports", typ: a("any") },
        { json: "secure_media", js: "secure_media", typ: u(r("Media"), null) },
        { json: "is_reddit_media_domain", js: "is_reddit_media_domain", typ: true },
        { json: "is_meta", js: "is_meta", typ: true },
        { json: "category", js: "category", typ: null },
        { json: "secure_media_embed", js: "secure_media_embed", typ: r("MediaEmbed") },
        { json: "link_flair_text", js: "link_flair_text", typ: null },
        { json: "can_mod_post", js: "can_mod_post", typ: true },
        { json: "score", js: "score", typ: 0 },
        { json: "approved_by", js: "approved_by", typ: null },
        { json: "is_created_from_ads_ui", js: "is_created_from_ads_ui", typ: true },
        { json: "author_premium", js: "author_premium", typ: true },
        { json: "thumbnail", js: "thumbnail", typ: "" },
        { json: "edited", js: "edited", typ: true },
        { json: "author_flair_css_class", js: "author_flair_css_class", typ: u(null, "") },
        { json: "author_flair_richtext", js: "author_flair_richtext", typ: a(r("FlairRichtext")) },
        { json: "gildings", js: "gildings", typ: r("DataGildings") },
        { json: "post_hint", js: "post_hint", typ: r("PostHint") },
        { json: "content_categories", js: "content_categories", typ: null },
        { json: "is_self", js: "is_self", typ: true },
        { json: "mod_note", js: "mod_note", typ: null },
        { json: "created", js: "created", typ: 0 },
        { json: "link_flair_type", js: "link_flair_type", typ: r("AuthorFlairType") },
        { json: "wls", js: "wls", typ: 0 },
        { json: "removed_by_category", js: "removed_by_category", typ: null },
        { json: "banned_by", js: "banned_by", typ: null },
        { json: "author_flair_type", js: "author_flair_type", typ: r("AuthorFlairType") },
        { json: "domain", js: "domain", typ: r("Domain") },
        { json: "allow_live_comments", js: "allow_live_comments", typ: true },
        { json: "selftext_html", js: "selftext_html", typ: null },
        { json: "likes", js: "likes", typ: null },
        { json: "suggested_sort", js: "suggested_sort", typ: u(null, "") },
        { json: "banned_at_utc", js: "banned_at_utc", typ: null },
        { json: "url_overridden_by_dest", js: "url_overridden_by_dest", typ: "" },
        { json: "view_count", js: "view_count", typ: null },
        { json: "archived", js: "archived", typ: true },
        { json: "no_follow", js: "no_follow", typ: true },
        { json: "is_crosspostable", js: "is_crosspostable", typ: true },
        { json: "pinned", js: "pinned", typ: true },
        { json: "over_18", js: "over_18", typ: true },
        { json: "preview", js: "preview", typ: r("Preview") },
        { json: "all_awardings", js: "all_awardings", typ: a(r("AllAwarding")) },
        { json: "awarders", js: "awarders", typ: a("any") },
        { json: "media_only", js: "media_only", typ: true },
        { json: "can_gild", js: "can_gild", typ: true },
        { json: "spoiler", js: "spoiler", typ: true },
        { json: "locked", js: "locked", typ: true },
        { json: "author_flair_text", js: "author_flair_text", typ: u(null, "") },
        { json: "treatment_tags", js: "treatment_tags", typ: a("") },
        { json: "visited", js: "visited", typ: true },
        { json: "removed_by", js: "removed_by", typ: null },
        { json: "num_reports", js: "num_reports", typ: null },
        { json: "distinguished", js: "distinguished", typ: null },
        { json: "subreddit_id", js: "subreddit_id", typ: r("SubredditID") },
        { json: "author_is_blocked", js: "author_is_blocked", typ: true },
        { json: "mod_reason_by", js: "mod_reason_by", typ: null },
        { json: "removal_reason", js: "removal_reason", typ: null },
        { json: "link_flair_background_color", js: "link_flair_background_color", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "is_robot_indexable", js: "is_robot_indexable", typ: true },
        { json: "report_reasons", js: "report_reasons", typ: null },
        { json: "author", js: "author", typ: "" },
        { json: "discussion_type", js: "discussion_type", typ: null },
        { json: "num_comments", js: "num_comments", typ: 0 },
        { json: "send_replies", js: "send_replies", typ: true },
        { json: "whitelist_status", js: "whitelist_status", typ: r("WhitelistStatus") },
        { json: "contest_mode", js: "contest_mode", typ: true },
        { json: "mod_reports", js: "mod_reports", typ: a("any") },
        { json: "author_patreon_flair", js: "author_patreon_flair", typ: true },
        { json: "author_flair_text_color", js: "author_flair_text_color", typ: u(r("FlairTextColor"), null) },
        { json: "permalink", js: "permalink", typ: "" },
        { json: "parent_whitelist_status", js: "parent_whitelist_status", typ: r("WhitelistStatus") },
        { json: "stickied", js: "stickied", typ: true },
        { json: "url", js: "url", typ: "" },
        { json: "subreddit_subscribers", js: "subreddit_subscribers", typ: 0 },
        { json: "created_utc", js: "created_utc", typ: 0 },
        { json: "num_crossposts", js: "num_crossposts", typ: 0 },
        { json: "media", js: "media", typ: u(r("Media"), null) },
        { json: "is_video", js: "is_video", typ: true },
        { json: "crosspost_parent_list", js: "crosspost_parent_list", typ: u(undefined, a(r("CrosspostParentList"))) },
        { json: "crosspost_parent", js: "crosspost_parent", typ: u(undefined, "") },
    ], false),
    "AllAwarding": o([
        { json: "giver_coin_reward", js: "giver_coin_reward", typ: u(0, null) },
        { json: "subreddit_id", js: "subreddit_id", typ: null },
        { json: "is_new", js: "is_new", typ: true },
        { json: "days_of_drip_extension", js: "days_of_drip_extension", typ: 0 },
        { json: "coin_price", js: "coin_price", typ: 0 },
        { json: "id", js: "id", typ: "" },
        { json: "penny_donate", js: "penny_donate", typ: u(0, null) },
        { json: "award_sub_type", js: "award_sub_type", typ: r("AwardSubType") },
        { json: "coin_reward", js: "coin_reward", typ: 0 },
        { json: "icon_url", js: "icon_url", typ: "" },
        { json: "days_of_premium", js: "days_of_premium", typ: 0 },
        { json: "tiers_by_required_awardings", js: "tiers_by_required_awardings", typ: u(m(r("TiersByRequiredAwarding")), null) },
        { json: "resized_icons", js: "resized_icons", typ: a(r("ResizedIcon")) },
        { json: "icon_width", js: "icon_width", typ: 0 },
        { json: "static_icon_width", js: "static_icon_width", typ: 0 },
        { json: "start_date", js: "start_date", typ: null },
        { json: "is_enabled", js: "is_enabled", typ: true },
        { json: "awardings_required_to_grant_benefits", js: "awardings_required_to_grant_benefits", typ: u(0, null) },
        { json: "description", js: "description", typ: "" },
        { json: "end_date", js: "end_date", typ: null },
        { json: "subreddit_coin_reward", js: "subreddit_coin_reward", typ: 0 },
        { json: "count", js: "count", typ: 0 },
        { json: "static_icon_height", js: "static_icon_height", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "resized_static_icons", js: "resized_static_icons", typ: a(r("ResizedIcon")) },
        { json: "icon_format", js: "icon_format", typ: u(r("Format"), null) },
        { json: "icon_height", js: "icon_height", typ: 0 },
        { json: "penny_price", js: "penny_price", typ: u(0, null) },
        { json: "award_type", js: "award_type", typ: r("AwardType") },
        { json: "static_icon_url", js: "static_icon_url", typ: "" },
    ], false),
    "ResizedIcon": o([
        { json: "url", js: "url", typ: "" },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "format", js: "format", typ: u(undefined, u(r("Format"), null)) },
    ], false),
    "TiersByRequiredAwarding": o([
        { json: "resized_icons", js: "resized_icons", typ: a(r("ResizedIcon")) },
        { json: "awardings_required", js: "awardings_required", typ: 0 },
        { json: "static_icon", js: "static_icon", typ: r("ResizedIcon") },
        { json: "resized_static_icons", js: "resized_static_icons", typ: a(r("ResizedIcon")) },
        { json: "icon", js: "icon", typ: r("ResizedIcon") },
    ], false),
    "FlairRichtext": o([
        { json: "e", js: "e", typ: r("AuthorFlairType") },
        { json: "t", js: "t", typ: "" },
    ], false),
    "CrosspostParentList": o([
        { json: "approved_at_utc", js: "approved_at_utc", typ: null },
        { json: "subreddit", js: "subreddit", typ: "" },
        { json: "selftext", js: "selftext", typ: "" },
        { json: "author_fullname", js: "author_fullname", typ: "" },
        { json: "saved", js: "saved", typ: true },
        { json: "mod_reason_title", js: "mod_reason_title", typ: null },
        { json: "gilded", js: "gilded", typ: 0 },
        { json: "clicked", js: "clicked", typ: true },
        { json: "title", js: "title", typ: "" },
        { json: "link_flair_richtext", js: "link_flair_richtext", typ: a(r("FlairRichtext")) },
        { json: "subreddit_name_prefixed", js: "subreddit_name_prefixed", typ: "" },
        { json: "hidden", js: "hidden", typ: true },
        { json: "pwls", js: "pwls", typ: 0 },
        { json: "link_flair_css_class", js: "link_flair_css_class", typ: u(null, "") },
        { json: "downs", js: "downs", typ: 0 },
        { json: "thumbnail_height", js: "thumbnail_height", typ: 0 },
        { json: "top_awarded_type", js: "top_awarded_type", typ: null },
        { json: "hide_score", js: "hide_score", typ: true },
        { json: "name", js: "name", typ: "" },
        { json: "quarantine", js: "quarantine", typ: true },
        { json: "link_flair_text_color", js: "link_flair_text_color", typ: r("FlairTextColor") },
        { json: "upvote_ratio", js: "upvote_ratio", typ: 3.14 },
        { json: "author_flair_background_color", js: "author_flair_background_color", typ: u(null, "") },
        { json: "ups", js: "ups", typ: 0 },
        { json: "total_awards_received", js: "total_awards_received", typ: 0 },
        { json: "media_embed", js: "media_embed", typ: r("MediaEmbed") },
        { json: "thumbnail_width", js: "thumbnail_width", typ: 0 },
        { json: "author_flair_template_id", js: "author_flair_template_id", typ: u(null, "") },
        { json: "is_original_content", js: "is_original_content", typ: true },
        { json: "user_reports", js: "user_reports", typ: a("any") },
        { json: "secure_media", js: "secure_media", typ: u(r("Media"), null) },
        { json: "is_reddit_media_domain", js: "is_reddit_media_domain", typ: true },
        { json: "is_meta", js: "is_meta", typ: true },
        { json: "category", js: "category", typ: null },
        { json: "secure_media_embed", js: "secure_media_embed", typ: r("MediaEmbed") },
        { json: "link_flair_text", js: "link_flair_text", typ: u(null, "") },
        { json: "can_mod_post", js: "can_mod_post", typ: true },
        { json: "score", js: "score", typ: 0 },
        { json: "approved_by", js: "approved_by", typ: null },
        { json: "is_created_from_ads_ui", js: "is_created_from_ads_ui", typ: true },
        { json: "author_premium", js: "author_premium", typ: true },
        { json: "thumbnail", js: "thumbnail", typ: "" },
        { json: "edited", js: "edited", typ: true },
        { json: "author_flair_css_class", js: "author_flair_css_class", typ: null },
        { json: "author_flair_richtext", js: "author_flair_richtext", typ: a(r("FlairRichtext")) },
        { json: "gildings", js: "gildings", typ: r("CrosspostParentListGildings") },
        { json: "post_hint", js: "post_hint", typ: r("PostHint") },
        { json: "content_categories", js: "content_categories", typ: null },
        { json: "is_self", js: "is_self", typ: true },
        { json: "subreddit_type", js: "subreddit_type", typ: r("SubredditType") },
        { json: "created", js: "created", typ: 0 },
        { json: "link_flair_type", js: "link_flair_type", typ: r("AuthorFlairType") },
        { json: "wls", js: "wls", typ: 0 },
        { json: "removed_by_category", js: "removed_by_category", typ: null },
        { json: "banned_by", js: "banned_by", typ: null },
        { json: "author_flair_type", js: "author_flair_type", typ: r("AuthorFlairType") },
        { json: "domain", js: "domain", typ: r("Domain") },
        { json: "allow_live_comments", js: "allow_live_comments", typ: true },
        { json: "selftext_html", js: "selftext_html", typ: null },
        { json: "likes", js: "likes", typ: null },
        { json: "suggested_sort", js: "suggested_sort", typ: u(null, "") },
        { json: "banned_at_utc", js: "banned_at_utc", typ: null },
        { json: "url_overridden_by_dest", js: "url_overridden_by_dest", typ: "" },
        { json: "view_count", js: "view_count", typ: null },
        { json: "archived", js: "archived", typ: true },
        { json: "no_follow", js: "no_follow", typ: true },
        { json: "is_crosspostable", js: "is_crosspostable", typ: true },
        { json: "pinned", js: "pinned", typ: true },
        { json: "over_18", js: "over_18", typ: true },
        { json: "preview", js: "preview", typ: r("Preview") },
        { json: "all_awardings", js: "all_awardings", typ: a(r("AllAwarding")) },
        { json: "awarders", js: "awarders", typ: a("any") },
        { json: "media_only", js: "media_only", typ: true },
        { json: "link_flair_template_id", js: "link_flair_template_id", typ: u(undefined, "") },
        { json: "can_gild", js: "can_gild", typ: true },
        { json: "spoiler", js: "spoiler", typ: true },
        { json: "locked", js: "locked", typ: true },
        { json: "author_flair_text", js: "author_flair_text", typ: u(null, "") },
        { json: "treatment_tags", js: "treatment_tags", typ: a("any") },
        { json: "visited", js: "visited", typ: true },
        { json: "removed_by", js: "removed_by", typ: null },
        { json: "mod_note", js: "mod_note", typ: null },
        { json: "distinguished", js: "distinguished", typ: null },
        { json: "subreddit_id", js: "subreddit_id", typ: "" },
        { json: "author_is_blocked", js: "author_is_blocked", typ: true },
        { json: "mod_reason_by", js: "mod_reason_by", typ: null },
        { json: "num_reports", js: "num_reports", typ: null },
        { json: "removal_reason", js: "removal_reason", typ: null },
        { json: "link_flair_background_color", js: "link_flair_background_color", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "is_robot_indexable", js: "is_robot_indexable", typ: true },
        { json: "report_reasons", js: "report_reasons", typ: null },
        { json: "author", js: "author", typ: "" },
        { json: "discussion_type", js: "discussion_type", typ: null },
        { json: "num_comments", js: "num_comments", typ: 0 },
        { json: "send_replies", js: "send_replies", typ: true },
        { json: "whitelist_status", js: "whitelist_status", typ: "" },
        { json: "contest_mode", js: "contest_mode", typ: true },
        { json: "mod_reports", js: "mod_reports", typ: a("any") },
        { json: "author_patreon_flair", js: "author_patreon_flair", typ: true },
        { json: "author_flair_text_color", js: "author_flair_text_color", typ: u(r("FlairTextColor"), null) },
        { json: "permalink", js: "permalink", typ: "" },
        { json: "parent_whitelist_status", js: "parent_whitelist_status", typ: "" },
        { json: "stickied", js: "stickied", typ: true },
        { json: "url", js: "url", typ: "" },
        { json: "subreddit_subscribers", js: "subreddit_subscribers", typ: 0 },
        { json: "created_utc", js: "created_utc", typ: 0 },
        { json: "num_crossposts", js: "num_crossposts", typ: 0 },
        { json: "media", js: "media", typ: u(r("Media"), null) },
        { json: "is_video", js: "is_video", typ: true },
    ], false),
    "CrosspostParentListGildings": o([
        { json: "gid_1", js: "gid_1", typ: u(undefined, 0) },
    ], false),
    "Media": o([
        { json: "reddit_video", js: "reddit_video", typ: r("RedditVideo") },
    ], false),
    "RedditVideo": o([
        { json: "bitrate_kbps", js: "bitrate_kbps", typ: 0 },
        { json: "fallback_url", js: "fallback_url", typ: "" },
        { json: "height", js: "height", typ: 0 },
        { json: "width", js: "width", typ: 0 },
        { json: "scrubber_media_url", js: "scrubber_media_url", typ: "" },
        { json: "dash_url", js: "dash_url", typ: "" },
        { json: "duration", js: "duration", typ: 0 },
        { json: "hls_url", js: "hls_url", typ: "" },
        { json: "is_gif", js: "is_gif", typ: true },
        { json: "transcoding_status", js: "transcoding_status", typ: r("TranscodingStatus") },
    ], false),
    "MediaEmbed": o([
    ], false),
    "Preview": o([
        { json: "images", js: "images", typ: a(r("Image")) },
        { json: "enabled", js: "enabled", typ: true },
    ], false),
    "Image": o([
        { json: "source", js: "source", typ: r("ResizedIcon") },
        { json: "resolutions", js: "resolutions", typ: a(r("ResizedIcon")) },
        { json: "variants", js: "variants", typ: r("Variants") },
        { json: "id", js: "id", typ: "" },
    ], false),
    "Variants": o([
        { json: "gif", js: "gif", typ: u(undefined, r("GIF")) },
        { json: "mp4", js: "mp4", typ: u(undefined, r("GIF")) },
    ], false),
    "GIF": o([
        { json: "source", js: "source", typ: r("ResizedIcon") },
        { json: "resolutions", js: "resolutions", typ: a(r("ResizedIcon")) },
    ], false),
    "DataGildings": o([
        { json: "gid_1", js: "gid_1", typ: u(undefined, 0) },
        { json: "gid_2", js: "gid_2", typ: u(undefined, 0) },
    ], false),
    "AwardSubType": [
        "APPRECIATION",
        "GLOBAL",
        "GROUP",
        "PREMIUM",
    ],
    "AwardType": [
        "global",
    ],
    "Format": [
        "APNG",
        "PNG",
    ],
    "AuthorFlairType": [
        "richtext",
        "text",
    ],
    "FlairTextColor": [
        "dark",
    ],
    "Domain": [
        "discord.gg",
        "i.redd.it",
        "v.redd.it",
    ],
    "TranscodingStatus": [
        "completed",
    ],
    "PostHint": [
        "hosted:video",
        "image",
        "link",
    ],
    "SubredditType": [
        "public",
    ],
    "WhitelistStatus": [
        "all_ads",
    ],
    "Subreddit": [
        "aww",
    ],
    "SubredditID": [
        "t5_2qh1o",
    ],
    "SubredditNamePrefixed": [
        "r/aww",
    ],
    "Kind": [
        "t3",
    ],
};
