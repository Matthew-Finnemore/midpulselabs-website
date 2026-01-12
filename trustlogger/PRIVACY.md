# Privacy Policy for TrustLogger

Last Updated: January 11, 2026

## Introduction

TrustLogger ("we", "our", or "us") is committed to protecting your privacy.
This Privacy Policy explains how we collect, use, disclose, and safeguard your
information when you use our mobile application (the "App"). Please read this
privacy policy carefully.

## Information We Collect

### 1\. Personal Information

When you create an account, we collect:

  * **Email address** \- Used for authentication and account recovery
  * **Password** \- Stored securely (hashed) for account access
  * **Username** \- Required on first login (3-30 characters, alphanumeric and underscores only). Your username is publicly searchable by exact match to enable friend discovery
  * **User ID** \- Automatically generated unique identifier

### 2\. Location Data

TrustLogger collects and uses your device location to provide core features:

  * **GPS Coordinates** \- To show nearby National Trust sites on maps and in search results
  * **Foreground Location** \- Collected when you actively use the app's map or "nearby sites" features
  * **Background Location (Optional)** \- If you enable proximity alerts, we track your location in the background to notify you when you're near National Trust sites (even when the app is closed)
  * **Geofencing** \- We monitor up to 20 nearest sites within a 10-mile radius of your location. You receive alerts when you enter a 1-mile radius of a site
  * **Location Permissions** \- We request ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION, and ACCESS_BACKGROUND_LOCATION (Android) or "Always Allow" (iOS) for proximity features
  * **Update Frequency** \- Geofences are updated only when you move more than 5 kilometers to minimize battery usage
  * **Storage** \- Your current location is temporarily stored on your device and not sent to our servers unless you create a visit record

**Important:** You can disable background location tracking at any time
through your device settings. This will disable proximity alerts but all other
features will continue to work.

### 3\. Visit and Activity Data

We store the following information when you use the app:

  * **Visit records** \- Sites you've visited, visit dates, and optional notes
  * **Visit participants** \- Friends you tag on your visits. Tagged friends can see the full visit details including your notes
  * **Visit tags** \- When a friend tags you on their visit, you can view the visit details and remove yourself at any time
  * **Favorites** \- National Trust sites you've marked as favorites
  * **Visit notes** \- Text notes you add to your visit records (maximum 200 words). These are visible to friends you tag on the visit

### 4\. Friend System Data

TrustLogger includes social networking features. We collect and store:

  * **Friend relationships** \- Connections between users who have mutually accepted friend requests
  * **Friend requests** \- Sent and received requests with status (pending, accepted, rejected, or cancelled)
  * **Friend codes** \- Unique 8-character redeemable codes you generate to instantly add friends. These codes expire after a set period
  * **User search history** \- Username searches you perform to find friends (stored temporarily for performance)
  * **Friend visibility** \- Friends can see visits where you've tagged them, but cannot see your untagged visits, email address, or real-time location

### 5\. Push Notification Data

If you enable notifications, we collect:

  * **Device push tokens** \- Unique identifiers to send notifications to your device via Expo Push Notification Service
  * **Notification preferences** \- Your settings for friend requests, visit tags, and proximity alerts
  * **Notification history** \- Records of sent notifications for debugging and delivery verification

We send three types of notifications:

  1. **Friend requests** \- When someone sends you a friend request
  2. **Visit tags** \- When a friend tags you on a visit
  3. **Proximity alerts** \- When you're near a National Trust site (requires background location permission)

### 6\. Device and Usage Information

We automatically collect:

  * **Device information** \- Device model, operating system version
  * **App usage data** \- Features you use, crash reports
  * **Network status** \- To enable offline functionality

### 7\. Third-Party Services Data

TrustLogger integrates with the following third-party services:

#### Google Services

  * **Google Maps API** \- For displaying maps and site locations
  * **Google OAuth** \- For optional sign-in with Google (requires your email and basic profile)
  * **Google Maps Static API** \- For displaying address preview images

#### Supabase (Backend Infrastructure)

  * **Authentication** \- User credentials and session management
  * **Database** \- Secure storage of your visit records, favorites, and friend relationships
  * **Realtime** \- WebSocket connections for instant friend request and visit tag notifications
  * **Edge Functions** \- Automated hourly sync of National Trust site data (4 AM - 7 PM GMT)
  * **Server location** \- United States

#### Expo Push Notification Service

  * **Push delivery** \- Sends notifications to your device for friend requests, visit tags, and proximity alerts
  * **Device tokens** \- Stores your device identifier to route notifications
  * **Privacy** \- Expo does not access notification content; they only handle delivery infrastructure

#### National Trust API

  * **Site Data** \- We fetch publicly available National Trust site information
  * **Emergency Notices** \- Real-time alerts about site closures or maintenance

## How We Use Your Information

We use collected information to:

  1. **Provide core functionality** \- Enable visit tracking, favorites, and site discovery
  2. **Personalize your experience** \- Show nearby sites based on your location
  3. **Enable social features** \- Allow friend discovery, friend requests, visit tagging, and sharing experiences with friends
  4. **Send notifications** \- Friend requests, visit tags, proximity alerts, and emergency notices about sites
  5. **Background location services** \- Monitor geofences to alert you when near National Trust sites (only if enabled)
  6. **Improve the app** \- Analyze usage patterns to fix bugs and add features
  7. **Provide customer support** \- Respond to your inquiries and resolve issues

## Data Sharing and Disclosure

### Friend System and Social Features

TrustLogger's friend system allows controlled sharing of your activity:

#### What Friends Can See

  * **Your username** \- Visible to anyone who searches for it
  * **Visit tags** \- Friends can see visits where you explicitly tagged them, including visit date, site, and notes
  * **Friend status** \- Whether you are friends with someone

#### What Friends CANNOT See

  * **Untagged visits** \- Visits where you didn't tag them remain completely private
  * **Your email address** \- Never shared with other users
  * **Your real-time location** \- Location is never shared with friends
  * **Your favorites** \- Your favorited sites are private unless you tag friends on visits to those sites

#### Managing Friend Visibility

  * **Removing friends** \- You can unfriend anyone at any time from the Friends screen
  * **Removing yourself from tags** \- If a friend tags you on a visit, you can remove yourself from that visit
  * **Rejecting requests** \- You can reject friend requests; the sender won't be notified
  * **Cancelling requests** \- You can cancel pending friend requests you've sent

**Note:** Legacy household sharing groups from previous versions have been
replaced by the friend system. If you previously used household groups, your
data has been migrated to the new friend-based system.

### Third-Party Service Providers

We share your data with:

  * **Supabase** \- For secure cloud storage, authentication, and real-time notifications
  * **Google** \- For maps, OAuth authentication, and static map images
  * **Expo** \- For push notification delivery infrastructure (device tokens only, not notification content)
  * **National Trust** \- To fetch publicly available site information

### Legal Requirements

We may disclose your information if required by law or in response to valid
legal requests.

## Data Retention

  * **Active accounts** \- We retain your data for as long as your account is active
  * **Deleted accounts** \- When you delete your account, all personal data is permanently removed within 30 days
  * **Visit history** \- Retained indefinitely unless you manually delete individual visits or your entire account
  * **Friend relationships** \- Retained until you or your friend removes the friendship
  * **Friend requests** \- Pending requests retained for 90 days, then automatically expired. Accepted/rejected/cancelled requests retained for 30 days for audit purposes
  * **Friend codes** \- Expire after 7 days or when redeemed, whichever comes first
  * **Visit participant tags** \- Retained until the visit is deleted or you remove yourself from the tag
  * **Push notification tokens** \- Retained until you log out, uninstall the app, or revoke notification permissions
  * **Cached site data** \- Stored locally on your device for 1 hour (enriched data) or 24 hours (basic data), then refreshed

## Your Data Rights (GDPR Compliance)

If you are in the European Economic Area (EEA), you have the right to:

  1. **Access** \- Request a copy of your personal data
  2. **Correction** \- Update or correct inaccurate information (e.g., change your username from Profile settings)
  3. **Deletion** \- Delete your account and all associated data via the "Delete My Data" button in Profile settings
  4. **Portability** \- Export your visit data (contact support@trustlogger.app)
  5. **Withdraw consent** \- Revoke location or notification permissions at any time through device settings
  6. **Object to processing** \- Opt out of non-essential data collection like proximity alerts

To exercise these rights, contact us at
[privacy@trustlogger.app](mailto:privacy@trustlogger.app)

### What Happens When You Delete Your Account

When you use the "Delete My Data" function, we permanently remove:

  * Your email, username, and account credentials
  * All visit records you created (including notes)
  * Your favorites list
  * All friend relationships (you will be removed from your friends' lists)
  * Friend requests you sent or received
  * Visit participant tags (you will be removed from visits where friends tagged you)
  * Push notification tokens
  * Friend codes you generated

**Note:** If you were tagged on a friend's visit, you will be removed from
that visit's participant list, but the visit itself (created by your friend)
will remain in their account.

## Children's Privacy (COPPA Compliance)

TrustLogger is not intended for children under 13 years of age. We do not
knowingly collect personal information from children under 13. If you are a
parent or guardian and believe your child has provided us with personal
information, please contact us immediately.

## Data Security

We implement security measures to protect your information:

  * **Encryption** \- All data transmitted between the app and servers uses HTTPS/TLS
  * **Password hashing** \- Passwords are hashed using industry-standard algorithms
  * **Row-level security (RLS)** \- Database policies ensure users can only access their own data
  * **No backup exposure** \- Android backup is disabled to prevent credential extraction
  * **Secure storage** \- Authentication tokens stored securely on your device

However, no method of transmission over the internet is 100% secure. We cannot
guarantee absolute security.

## Offline Functionality

TrustLogger works offline:

  * **Local caching** \- Site data is cached on your device for 24 hours
  * **Offline queue** \- Actions performed offline are queued and synced when you reconnect
  * **Data persistence** \- Your favorites and visits are stored locally and synced to the cloud

## Permissions We Request

### Required Permissions

  * **INTERNET** \- To fetch site data, sync your visits, and communicate with friends
  * **ACCESS_FINE_LOCATION** \- To show nearby National Trust sites and calculate distances
  * **ACCESS_COARSE_LOCATION** \- For approximate location when GPS is unavailable

### Optional Permissions

  * **ACCESS_BACKGROUND_LOCATION (Android) / "Always Allow" Location (iOS)** \- Required for proximity alerts to monitor when you're near National Trust sites, even when the app is closed. You can disable this in device settings without affecting other features
  * **POST_NOTIFICATIONS (Android 13+)** \- To send friend requests, visit tag notifications, and proximity alerts

### Permissions We Do NOT Request

  * **RECORD_AUDIO** \- We do not access your microphone
  * **CAMERA** \- Not used in the current version
  * **CONTACTS** \- We do not access your contacts
  * **READ_EXTERNAL_STORAGE / WRITE_EXTERNAL_STORAGE** \- No longer required; all storage is handled internally

## Cookies and Tracking

TrustLogger does not use cookies or third-party analytics trackers. We use:

  * **AsyncStorage** \- Local device storage for app state (favorites, cached sites)
  * **Session tokens** \- To maintain your login session

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of
significant changes by:

  * Updating the "Last Updated" date at the top of this policy
  * Displaying an in-app notification (for major changes)
  * Sending an email to your registered email address (for material changes)

Your continued use of the app after changes indicates acceptance of the
updated policy.

## Notification Preferences and Control

TrustLogger gives you granular control over notifications. You can manage your
preferences from the app settings:

### Notification Types You Can Control

  * **Friend Requests** \- Receive notifications when someone sends you a friend request
  * **Visit Tags** \- Get notified when a friend tags you on a visit
  * **Proximity Alerts** \- Receive alerts when you're within 1 mile of a National Trust site (requires background location permission)

### How to Disable Notifications

  1. **In-app settings** \- Go to Profile → Notification Settings to toggle individual notification types
  2. **Device settings** \- Completely disable TrustLogger notifications through your device's notification settings
  3. **Background location** \- Disable "Always Allow" location permission to stop proximity alerts while keeping other notifications

**Note:** Disabling proximity alerts also requires turning off background
location tracking, as alerts depend on monitoring your location when the app
is closed.

## Your Choices

You can control your privacy:

  1. **Disable foreground location** \- Turn off location permissions in device settings (nearby sites and maps will not work)
  2. **Disable background location** \- Turn off "Always Allow" location in device settings (proximity alerts will stop, but all other features continue working)
  3. **Manage notifications** \- Disable specific notification types (friend requests, visit tags, proximity alerts) in app settings or device notification settings
  4. **Remove friends** \- Unfriend anyone from the Friends screen to stop sharing visit tags with them
  5. **Remove yourself from visit tags** \- If a friend tagged you on a visit, you can remove yourself from that visit
  6. **Change username** \- Update your username from Profile settings (subject to availability)
  7. **Delete data** \- Use "Delete My Data" button in Profile → Account Settings to permanently delete your account and all associated data
  8. **Logout** \- Sign out to stop syncing data and remove push notification tokens
  9. **Uninstall** \- Remove the app to delete local data (cloud data remains until you delete your account)

## Contact Us

If you have questions about this Privacy Policy or our data practices:

  * **Email:** [privacy@trustlogger.app](mailto:privacy@trustlogger.app)
  * **Support:** [support@trustlogger.app](mailto:support@trustlogger.app)

## Legal Information

  * **Service Provider:** TrustLogger is operated by MidPulse Labs
  * **Jurisdiction:** United Kingdom
  * **Governing Law:** This Privacy Policy is governed by the laws of the United Kingdom

## Third-Party Links

The app may contain links to external sites (National Trust website, Google
Maps). We are not responsible for the privacy practices of these third-party
sites. Please review their privacy policies independently.

## Data Breach Notification

In the event of a data breach that affects your personal information, we will
notify affected users within 72 hours via email and an in-app notification.

## International Data Transfers

Your information may be transferred to and stored on servers located in the
United States. By using TrustLogger, you consent to this transfer. We ensure
adequate safeguards are in place as required by GDPR.

* * *

**By using TrustLogger, you agree to this Privacy Policy.**

If you do not agree with this policy, please do not use the app.

### MidPulse Labs

Creating useful mobile applications for everyday life. Download our apps or
get in touch with questions and feedback.

#### Navigation

[Home](/) [Apps](/#apps) [Contact](/contact) [Privacy](/privacy)

#### Connect

[Email](mailto:contact@midpulselabs.com) [Contact Form](/contact)

(C) 2025 MidPulse Labs. All rights reserved.

[Privacy Policy](/privacy)

