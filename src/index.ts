export namespace HttpConst {
	export enum CSPD {
		BASE_URI = "base-uri",
		BLOCK_ALL_MIXED_CONTENT = "block-all-mixed-content",
		CHILD_SRC = "child-src",
		CONNECT_SRC = "connect-src",
		DEFAULT_SRC = "default-src",
		FONT_SRC = "font-src",
		FORM_ACTION = "form-action",
		FRAME_ANCESTORS = "frame-ancestors",
		FRAME_SRC = "frame-src",
		IMG_SRC = "img-src",
		MANIFEST_SRC = "manifest-src",
		MEDIA_SRC = "media-src",
		OBJECT_SRC = "object-src",
		PLUGIN_TYPES = "plugin-types",
		REFERRER = "referrer",
		REPORT_URI = "report-uri",
		REQUIRE_SRI_FOR = "require-sri-for",
		PREFETCH_SRC = "prefetch-src",
		SANDBOX = "sandbox",
		SCRIPT_SRC = "script-src",
		STYLE_SRC = "style-src",
		UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests",
		WORKER_SRC = "worker-src",
	};

	export enum CSPS {
		SELF = "self",
		NONE = "none",
		STRICT_DYNAMIC = "strict-dynamic",
		UNSAFE_INLINE = "unsafe-inline",
		UNSAFE_EVAL = "unsafe-eval",
		SELF_QTD = "'self'",
		NONE_QTD = "'none'",
		STRICT_DYNAMIC_QTD = "'strict-dynamic'",
		UNSAFE_INLINE_QTD = "'unsafe-inline'",
		UNSAFE_EVAL_QTD = "'unsafe-eval'"
	};

	export enum CacheControls {
		IMMUTABLE = "immutable",
		MAX_AGE = "max-age",
		MAX_STALE = "max-stale",
		MIN_FRESH = "min-fresh",
		MUST_REVALIDATE = "must-revalidate",
		NO_CACHE = "no-cache",
		NO_STORE = "no-store",
		NO_TRANSFORM = "no-transform",
		ONLY_IF_CACHED = "only-if-cached",
		PRIVATE = "private",
		PROXY_REVALIDATE = "proxy-revalidate",
		PUBLIC = "public",
		S_MAXAGE = "s-maxage",
		STALE_IF_ERROR = "stale-if-error",
		STALE_WHILE_REVALIDATE = "stale-while-revalidate"
	};

	export enum ResponseCodes {
		CONTINUE = 100,
		SWITCHING_PROTOCOL = 101,
		PROCESSING = 102,
		EARLY_HINTS = 103,
		OK = 200,
		CREATED = 201,
		ACCEPTED = 202,
		NON_AUTHORITATIVE_INFORMATION = 203,
		NO_CONTENT = 204,
		RESET_CONTENT = 205,
		PARTIAL_CONTENT = 206,
		MULTI_STATUS = 207,
		ALREADY_REPORTED = 208,
		IM_USED = 226,
		MULTIPLE_CHOICE = 300,
		MOVED_PERMANENTLY = 301,
		MOVED_TEMPORARILY = 302,
		FOUND = 302,
		SEE_OTHER = 303,
		NOT_MODIFIED = 304,
		USE_PROXY = 305,
		TEMPORARY_REDIRECT = 307,
		PERMANENT_REDIRECT = 308,
		BAD_REQUEST = 400,
		UNAUTHORIZED = 401,
		PAYMENT_REQUIRED = 402,
		FORBIDDEN = 403,
		NOT_FOUND = 404,
		METHOD_NOT_ALLOWED = 405,
		NOT_ACCEPTABLE = 406,
		PROXY_AUTHENTICATION_REQUIRED = 407,
		REQUEST_TIMEOUT = 408,
		CONFLICT = 409,
		GONE = 410,
		LENGTH_REQUIRED = 411,
		PRECONDITION_FAILED = 412,
		PAYLOAD_TOO_LARGE = 413,
		URI_TOO_LONG = 414,
		UNSUPPORTED_MEDIA_TYPE = 415,
		RANGE_NOT_SATISFIABLE = 416,
		EXPECTATION_FAILED = 417,
		I_AM_A_TEAPOT = 418,
		MISDIRECTED_REQUEST = 421,
		UNPROCESSABLE_ENTITY = 422,
		LOCKED = 423,
		FAILED_DEPENDENCY = 424,
		UPGRADE_REQUIRED = 426,
		PRECONDITION_REQUIRED = 428,
		TOO_MANY_REQUESTS = 429,
		REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
		REQUESTED_HOST_UNAVAILABLE = 434,
		RETRY_WITH = 449,
		UNAVAILABLE_FOR_LEGAL_REASONS = 451,
		INTERNAL_SERVER_ERROR = 500,
		NOT_IMPLEMENTED = 501,
		BAD_GATEWAY = 502,
		SERVICE_UNAVAILABLE = 503,
		GATEWAY_TIMEOUT = 504,
		HTTP_VERSION_NOT_SUPPORTED = 505,
		VARIANT_ALSO_NEGOTIATES = 506,
		INSUFFICIENT_STORAGE = 507,
		LOOP_DETECTED = 508,
		BANDWIDTH_LIMIT_EXCEEDED = 509,
		NOT_EXTENDED = 510,
		NETWORK_AUTHENTICATION_REQUIRED = 511,
		UNKNOWN_ERROR = 520,
		WEB_SERVER_IS_DOWN = 521,
		CONNECTION_TIMED_OUT = 522,
		ORIGIN_IS_UNREACHABLE = 523,
		A_TIMEOUT_OCCURRED = 524,
		SSL_HANDSHAKE_FAILED = 525,
		INVALID_SSL_CERTIFICATE = 526
	};

	export enum Methods {
		CONNECT = "CONNECT",
		COPY = "COPY",
		DELETE = "DELETE",
		GET = "GET",
		HEAD = "HEAD",
		LINK = "LINK",
		LOCK = "LOCK",
		OPTIONS = "OPTIONS",
		PATCH = "PATCH",
		POST = "POST",
		PROPFIND = "PROPFIND",
		PURGE = "PURGE",
		PUT = "PUT",
		TRACE = "TRACE",
		UNLINK = "UNLINK",
		UNLOCK = "UNLOCK",
		VIEW = "VIEW",
	}

	export enum Headers {
		A_IM = "A-IM",
		ACCEPT = "Accept",
		ACCEPT_CH = "Accept-CH",
		ACCEPT_CH_LIFETIME = "Accept-CH-Lifetime",
		ACCEPT_CHARSET = "Accept-Charset",
		ACCEPT_DATETIME = "Accept-Datetime",
		ACCEPT_ENCODING = "Accept-Encoding",
		ACCEPT_LANGUAGE = "Accept-Language",
		ACCEPT_PATCH = "Accept-Patch",
		ACCEPT_RANGES = "Accept-Ranges",
		ACCESS_CONTROL_ALLOW_CREDENTIALS = "Access-Control-Allow-Credentials",
		ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers",
		ACCESS_CONTROL_ALLOW_METHODS = "Access-Control-Allow-Methods",
		ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin",
		ACCESS_CONTROL_EXPOSE_HEADERS = "Access-Control-Expose-Headers",
		ACCESS_CONTROL_MAX_AGE = "Access-Control-Max-Age",
		ACCESS_CONTROL_REQUEST_HEADERS = "Access-Control-Request-Headers",
		ACCESS_CONTROL_REQUEST_METHOD = "Access-Control-Request-Method",
		AGE = "Age",
		ALLOW = "Allow",
		ALT_SVC = "Alt-Svc",
		ALTERNATES = "Alternates",
		AUTHORIZATION = "Authorization",
		CACHE_CONTROL = "Cache-Control",
		CONNECTION = "Connection",
		CONTENT_DISPOSITION = "Content-Disposition",
		CONTENT_DPR = "Content-DPR",
		CONTENT_ENCODING = "Content-Encoding",
		CONTENT_LANGUAGE = "Content-Language",
		CONTENT_LENGTH = "Content-Length",
		CONTENT_LOCATION = "Content-Location",
		CONTENT_MD5 = "Content-MD5",
		CONTENT_RANGE = "Content-Range",
		CONTENT_SECURITY_POLICY = "Content-Security-Policy",
		CONTENT_SECURITY_POLICY_REPORT_ONLY = "Content-Security-Policy-Report-Only",
		CONTENT_TYPE = "Content-Type",
		CONTENT_VERSION = "Content-Version",
		COOKIE = "Cookie",
		DATE = "Date",
		DELTA_BASE = "Delta-Base",
		DERIVED_FROM = "Derived-From",
		DNT = "DNT",
		DOWNLINK = "Downlink",
		DPR = "DPR",
		EARLY_DATA = "Early-Data",
		ETAG = "ETag",
		EXPECT = "Expect",
		EXPECT_CT = "Expect-CT",
		EXPIRES = "Expires",
		FORWARDED = "Forwarded",
		FROM = "From",
		FRONT_END_HTTPS = "Front-End-Https",
		HOST = "Host",
		IF_MATCH = "If-Match",
		IF_MODIFIED_SINCE = "If-Modified-Since",
		IF_NONE_MATCH = "If-None-Match",
		IF_RANGE = "If-Range",
		IF_UNMODIFIED_SINCE = "If-Unmodified-Since",
		IM = "IM",
		KEEP_ALIVE = "Keep-Alive",
		LARGE_ALLOCATION = "Large-Allocation",
		LAST_EVENT_ID = "Last-Event-ID",
		LAST_MODIFIED = "Last-Modified",
		LINK = "Link",
		LOCATION = "Location",
		MAX_FORWARDS = "Max-Forwards",
		MIME_VERSION = "MIME-Version",
		ORIGIN = "Origin",
		P3P = "P3P",
		PING_FROM = "Ping-From",
		PING_TO = "Ping-To",
		PRAGMA = "Pragma",
		PROXY_AUTHENTICATE = "Proxy-Authenticate",
		PROXY_AUTHORIZATION = "Proxy-Authorization",
		PROXY_CONNECTION = "Proxy-Connection",
		PUBLIC = "Public",
		PUBLIC_KEY_PINS = "Public-Key-Pins",
		PUBLIC_KEY_PINS_REPORT_ONLY = "Public-Key-Pins-Report-Only",
		RANGE = "Range",
		REFERER = "Referer",
		REFERRER_POLICY = "Referrer-Policy",
		REFRESH = "Refresh",
		RETRY_AFTER = "Retry-After",
		SAVE_DATA = "Save-Data",
		SEC_WEBSOCKET_ACCEPT = "Sec-WebSocket-Accept",
		SEC_WEBSOCKET_EXTENSIONS = "Sec-WebSocket-Extensions",
		SEC_WEBSOCKET_KEY = "Sec-WebSocket-Key",
		SEC_WEBSOCKET_PROTOCOL = "Sec-WebSocket-Protocol",
		SEC_WEBSOCKET_VERSION = "Sec-WebSocket-Version",
		SERVER = "Server",
		SERVER_TIMING = "Server-Timing",
		SET_COOKIE = "Set-Cookie",
		SOURCEMAP = "SourceMap",
		STATUS = "Status",
		STRICT_TRANSPORT_SECURITY = "Strict-Transport-Security",
		TE = "TE",
		TIMING_ALLOW_ORIGIN = "Timing-Allow-Origin",
		TITLE = "Title",
		TK = "Tk",
		TRAILER = "Trailer",
		TRANSFER_ENCODING = "Transfer-Encoding",
		UPGRADE = "Upgrade",
		UPGRADE_INSECURE_REQUESTS = "Upgrade-Insecure-Requests",
		USER_AGENT = "User-Agent",
		VARY = "Vary",
		VIA = "Via",
		VIEWPORT_WIDTH = "Viewport-Width",
		WARNING = "Warning",
		WIDTH = "Width",
		WWW_AUTHENTICATE = "WWW-Authenticate",
		X_ATT_DEVICEID = "X-ATT-DeviceId",
		X_CONTENT_DURATION = "X-Content-Duration",
		X_CONTENT_SECURITY_POLICY = "X-Content-Security-Policy",
		X_CONTENT_TYPE_OPTIONS = "X-Content-Type-Options",
		X_CORRELATION_ID = "X-Correlation-ID",
		X_CSRF_TOKEN = "X-Csrf-Token",
		X_DNS_PREFETCH_CONTROL = "X-DNS-Prefetch-Control",
		X_DOWNLOAD_OPTIONS = "X-Download-Options",
		X_FORWARDED_FOR = "X-Forwarded-For",
		X_FORWARDED_HOST = "X-Forwarded-Host",
		X_FORWARDED_PROTO = "X-Forwarded-Proto",
		X_FRAME_OPTIONS = "X-Frame-Options",
		X_HTTP_METHOD_OVERRIDE = "X-Http-Method-Override",
		X_PERMITTED_CROSS_DOMAIN_POLICIES = "X-Permitted-Cross-Domain-Policies",
		X_POWERED_BY = "X-Powered-By",
		X_REQUEST_ID = "X-Request-ID",
		X_REQUESTED_WITH = "X-Requested-With",
		X_ROBOTS_TAG = "X-Robots-Tag",
		X_UA_COMPATIBLE = "X-UA-Compatible",
		X_UIDH = "X-UIDH",
		X_WAP_PROFILE = "X-Wap-Profile",
		X_WEBKIT_CSP = "X-WebKit-CSP",
		X_XSS_PROTECTION = "X-XSS-Protection"
	};

	export enum ContentEncodings {
		AES128GCM = "aes128gcm",
		BR = "br",
		COMPRESS = "compress",
		DEFLATE = "deflate",
		EXI = "exi",
		GZIP = "gzip",
		IDENTITY = "identity",
		PACK200_GZIP = "pack200-gzip",
		SDCH = "sdch",
		X_COMPRESS = "x-compress",
		X_GZIP = "x-gzip"
	};


	export enum TrackingStatuses {
		UNDER_CONSTRUCTION = "!",
		DYNAMIC = "?",
		GATEWAY = "G",
		NOT_TRACKING = "N",
		TRACKING = "T",
		TRACKING_WITH_CONSENT = "C",
		TRACKING_ONLY_IF_CONSENT = "P",
		DISREGARDING_DNT = "D",
		UPDATED = "U",
	};

	export enum MimeTypes {
		APPLICATION_ATOM_XML = "application/atom+xml",
		APPLICATION_EDI_X12 = "application/EDI-X12",
		APPLICATION_EDIFACT = "application/EDIFACT",
		APPLICATION_JSON = "application/json",
		APPLICATION_JAVASCRIPT = "application/javascript",
		APPLICATION_OCTET_STREAM = "application/octet-stream",
		APPLICATION_OGG = "application/ogg",
		APPLICATION_PDF = "application/pdf",
		APPLICATION_POSTSCRIPT = "application/postscript",
		APPLICATION_SOAP_XML = "application/soap+xml",
		APPLICATION_FONT_WOFF = "application/font-woff",
		APPLICATION_XHTML_XML = "application/xhtml+xml",
		APPLICATION_XML_DTD = "application/xml-dtd",
		APPLICATION_XOP_XML = "application/xop+xml",
		APPLICATION_ZIP = "application/zip",
		APPLICATION_GZIP = "application/gzip",
		APPLICATION_X_BITTORRENT = "application/x-bittorrent",
		APPLICATION_X_TEX = "application/x-tex",
		APPLICATION_XML = "application/xml",

		APPLICATION_X_WWW_FORM_URLENCODED = "application/x-www-form-urlencoded",
		APPLICATION_X_DVI = "application/x-dvi",
		APPLICATION_X_LATEX = "application/x-latex",
		APPLICATION_X_FONT_TTF = "application/x-font-ttf",
		APPLICATION_X_SHOCKWAVE_FLASH = "application/x-shockwave-flash",
		APPLICATION_X_STUFFIT = "application/x-stuffit",
		APPLICATION_X_RAR_COMPRESSED = "application/x-rar-compressed",
		APPLICATION_X_TAR = "application/x-tar",
		APPLICATION_X_JQUERY_TMPL = "application/x-jquery-tmpl",
		APPLICATION_X_JAVASCRIPT = "application/x-javascript",

		APPLICATION_PKCDS12 = "application/x-pkcs12",
		APPLICATION_PKCDS7_CERTIFICATES = "application/x-pkcs7-certificates",
		APPLICATION_PKCDS7_CERTREQRESP = "application/x-pkcs7-certreqresp",
		APPLICATION_PKCDS7_MIME = "application/x-pkcs7-mime",
		APPLICATION_PKCDS7_SIGNATURE = "application/x-pkcs7-signature",

		AUDIO_BASIC = "audio/basic",
		AUDIO_L24 = "audio/L24",
		AUDIO_MP4 = "audio/mp4",
		AUDIO_AAC = "audio/aac",
		AUDIO_MPEG = "audio/mpeg",
		AUDIO_OGG = "audio/ogg",
		AUDIO_VORBIS = "audio/vorbis",
		AUDIO_X_MS_WMA = "audio/x-ms-wma",
		AUDIO_X_MS_WAX = "audio/x-ms-wax",
		AUDIO_VND_RN_REALAUDIO = "audio/vnd.rn-realaudio",
		AUDIO_VND_WAVE = "audio/vnd.wave",
		AUDIO_WEBM = "audio/webm",

		IMAGE_GIF = "image/gif",
		IMAGE_JPEG = "image/jpeg",
		IMAGE_PJPEG = "image/pjpeg",
		IMAGE_PNG = "image/png",
		IMAGE_SVG_XML = "image/svg+xml",
		IMAGE_TIFF = "image/tiff",
		IMAGE_VND_MICROSOFT_ICON = "image/vnd.microsoft.icon",
		IMAGE_VND_WAP_WBMP = "image/vnd.wap.wbmp",
		IMAGE_WEBP = "image/webp",

		IMAGE_HTTP = "message/http",
		IMAGE_IMDN_XML = "message/imdn+xml",
		IMAGE_PARTIAL = "message/partial",
		IMAGE_RFC822 = "message/rfc822",

		IMAGE_EXAMPLE = "model/example",
		IMAGE_IGES = "model/iges",
		IMAGE_MESH = "model/mesh",
		IMAGE_VRML = "model/vrml",
		IMAGE_X3D_BINARY = "model/x3d+binary",
		IMAGE_X3D_VRML = "model/x3d+vrml",
		IMAGE_X3D_XML = "model/x3d+xml",

		IMAGE_MIXED = "multipart/mixed",
		IMAGE_ALTERNATIVE = "multipart/alternative",
		IMAGE_RELATED = "multipart/related",
		IMAGE_FORM_DATA = "multipart/form-data",
		IMAGE_SIGNED = "multipart/signed",
		IMAGE_ENCRYPTED = "multipart/encrypted",

		IMAGE_CMD = "text/cmd",
		IMAGE_CSS = "text/css",
		IMAGE_CSV = "text/csv",
		IMAGE_HTML = "text/html",
		IMAGE_JAVASCRIPT = "text/javascript",
		IMAGE_PLAIN = "text/plain",
		IMAGE_PHP = "text/php",
		IMAGE_XML = "text/xml",
		IMAGE_MARKDOWN = "text/markdown",
		IMAGE_CACHE_MANIFEST = "text/cache-manifest",

		IMAGE_MPEG = "video/mpeg",
		IMAGE_MP4 = "video/mp4",
		IMAGE_OGG = "video/ogg",
		IMAGE_QUICKTIME = "video/quicktime",
		IMAGE_WEBM = "video/webm",
		IMAGE_X_MS_WMV = "video/x-ms-wmv",
		IMAGE_X_FLV = "video/x-flv",
		IMAGE__3GPP = "video/3gpp",
		IMAGE__3GPP2 = "video/3gpp2",

		APPLICATION_VND_OD_TEXT = "application/vnd.oasis.opendocument.text",
		APPLICATION_VND_OD_SPERADSHEET = "application/vnd.oasis.opendocument.spreadsheet",
		APPLICATION_VND_OD_PRESENTATION = "application/vnd.oasis.opendocument.presentation",
		APPLICATION_VND_OD_GRAPHICS = "application/vnd.oasis.opendocument.graphics",
		APPLICATION_MS_EXCEL = "application/vnd.ms-excel",
		APPLICATION_MS_EXCEL_2007 = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		APPLICATION_MS_POWERPOINT = "application/vnd.ms-powerpoint",
		APPLICATION_MS_POWERPOINT_2007 = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
		APPLICATION_MS_WORD_2007 = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		APPLICATION_MS_WORD = "application/msword",
		APPLICATION_XUL = "application/vnd.mozilla.xul+xml",
		APPLICATION_KML = "application/vnd.google-earth.kml+xml",
	};
}
