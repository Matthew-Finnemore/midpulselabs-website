# TrustLogger Universal Links Setup Guide

## Files Created

✅ `/auth/callback.html` - Password reset redirect page
✅ `/.well-known/apple-app-site-association` - iOS Universal Links
✅ `/.well-known/assetlinks.json` - Android App Links
✅ `vercel.json` - Updated with proper headers

## Next Steps

### 1. Get Your Apple Team ID

1. Go to https://developer.apple.com/account
2. Sign in with your Apple Developer account
3. Your Team ID is displayed at the top right (format: `AB12CD3456`)
4. Replace `TEAM_ID` in `.well-known/apple-app-site-association` with your actual Team ID

**Update this line:**
```json
"appID": "TEAM_ID.com.trustlogger.app"
```

**To:**
```json
"appID": "YOUR_ACTUAL_TEAM_ID.com.trustlogger.app"
```

### 2. Get Your Android SHA256 Fingerprint

Run this command to get your app's SHA256 fingerprint:

```bash
cd "C:\Users\MFinn\Desktop\NT mobile app\TrustLogger"

# For production build
eas credentials

# Select:
# - Android
# - Production
# - View credentials
# - Copy the SHA256 fingerprint
```

**Update `.well-known/assetlinks.json`:**
```json
"sha256_cert_fingerprints": [
  "YOUR_ACTUAL_SHA256_FINGERPRINT_HERE"
]
```

The fingerprint should look like:
`14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B1:3F:CF:44:E5`

### 3. Deploy to Vercel

```bash
cd "C:\Users\MFinn\Desktop\MidPulseLabs\midpulselabs-website"
git add .
git commit -m "Add TrustLogger auth redirect and universal links"
git push
```

Vercel will automatically deploy your changes.

### 4. Update Supabase Configuration

Go to **Supabase Dashboard → Authentication → URL Configuration**

**Site URL:**
```
https://midpulselabs.com
```

**Redirect URLs (add all of these):**
```
https://midpulselabs.com/auth/callback
trustlogger://auth/callback
trustlogger://
```

**Email Template:**

Go to **Authentication → Email Templates → Reset Password**

Change the button URL to:
```html
<a href="{{ .ConfirmationURL }}">Reset Password</a>
```

### 5. Rebuild Your App

After updating app.json with the new associated domains, rebuild:

```bash
cd "C:\Users\MFinn\Desktop\NT mobile app\TrustLogger"

# Build new version
eas build --profile production --platform android
eas build --profile production --platform ios
```

**Important:** Universal links only work in production builds, not Expo Go or development client.

### 6. Verify Setup

**Test iOS Universal Links:**
```bash
curl https://midpulselabs.com/.well-known/apple-app-site-association
```

Should return valid JSON.

**Test Android App Links:**
```bash
curl https://midpulselabs.com/.well-known/assetlinks.json
```

Should return valid JSON.

**Test Auth Redirect:**

Visit: https://midpulselabs.com/auth/callback#access_token=test&refresh_token=test

Should redirect to the app (or show manual link).

## How It Works

1. User clicks password reset link in email
2. Supabase redirects to: `https://midpulselabs.com/auth/callback#access_token=...&refresh_token=...`
3. **iOS/Android with app installed:** Universal link opens TrustLogger app directly with tokens
4. **Fallback:** Web page redirects via custom URL scheme `trustlogger://auth/callback#...`
5. App's `auth/callback` screen processes tokens and redirects to password reset form

## Troubleshooting

### Universal Links Not Working?

1. **Check Team ID** - Must match your Apple Developer account
2. **Rebuild app** - Universal links require a production build
3. **Clear app data** - iOS caches universal links
4. **Test on real device** - Simulators don't always work
5. **Wait 15 minutes** - Apple CDN needs time to cache the file

### Android App Links Not Working?

1. **Check SHA256** - Must match your production signing key
2. **Rebuild app** - App links require production build
3. **Clear app data** - Android caches app links
4. **Test verification:**
   ```bash
   adb shell pm get-app-links com.trustlogger.app
   ```

### Password Reset Still Not Working?

1. **Check Supabase redirect URLs** - Must include midpulselabs.com
2. **Check email template** - Should use `{{ .ConfirmationURL }}`
3. **Test with fresh email** - Old emails have old URLs
4. **Check logs** - Look for `[AuthCallback]` logs in app

## Benefits of This Setup

✅ **Works in development** - Web redirect bypasses Expo dev client issues
✅ **Works in production** - Universal links provide seamless UX
✅ **Security** - Universal links prevent URL hijacking
✅ **Email protection** - Custom domain mitigates email prefetching
✅ **Fallback support** - Custom scheme works if universal links fail

## Support

If you encounter issues, check:
- Vercel deployment logs
- iOS/Android system logs
- Supabase auth logs
- App console logs (`[AuthCallback]` prefix)
