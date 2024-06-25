import AnalysisTab from "../../Containers/TabAppScreen/AnalysisTab";
import Assets from "../Assets/Assets";
import { theme } from "../../Theme/Theme";

const STRINGS = {
  // auth
  common: {
    email: "Email",
    password: "Password",
    comPass: "Confirm Password",
    next: "Next",
  },
  login: {
    logIn: "Log in",
    signUp: "Sign up",
    forgotPassword: "Forgot Password?",
    or: "Or",
    dontAcc: "Don’t have an account?",
  },
  signUp: {
    userName: "User Name",
    alreadyAcc: "Already have an account?",
    signIn: "Sign in",
  },
  forgotPassword: {
    title: "Forgot Password",
  },
  resetPassword: {
    title: "Reset Password",
  },
  verification: {
    title: "Verification",
    receiveCode: "Didn’t received code?",
    resend: "Resend",
  },
  // add info details
  active: {
    youAre: "You Are",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advance: "Advanced",
  },
  gender: {
    title: "Gender",
    male: "Male",
    female: "Female",
  },
  targetArea: {
    title: "Target Area",
    arm: "Arm",
    abs: "Abs",
    butt: "Butt",
    leg: "Leg",
  },
  heightWeight: {
    cmkg: "cm & kg",
    ftlb: "ft & lbs",
    height: "Height",
    weight: "Weight",
    targetWeight: "Target Weight",
    heightFt: "Height(ft)",
    heightCm: "Height(cm)",
    weightLbs: "Weight(lbs)",
    weightKg: "Weight(kg)",
    targetWeightIbs: "Target Weight(lbs)",
    targetWeightKg: "Target Weight(kg)",
  },
  Subscription: {
    generatePlan: "Generate Plan",
    package: "Choose Your Package ",
    month: "Monthly",
    annually: "Annually",
    select: "Select",
    parchesPlan: "Perches Plan",
    googlePay: "Payment will be process via Google Pay",
  },

  // Home tab
  HomeTab: {
    home: "Home",
    plan: "Plan",
    analysis: "Analysis",
    profile: "Profile",
    gps: "GPS",
  },
  homeScreen: {
    userName: "User Name",
    stepTracker: "Step Tracker",
    caloriesBurn: "Calories Burn",
    step: "Steps",
    cal: "kcal",
    todayTraining: "Today’s Training",
    challenge: "Challenges",
    stretch: "Stretch",
  },
  videoScreen: {
    time: "Time",
    burn: "Burn",
    aboutExe: "About Exercise",
    writeNote: "Write Note",
    saveNote: "Save Note",
  },
  notificationMessage: {
    notification: "Notification",
    message: "Message",
    noMsg: "No Message",
    content: "When you have messages, you’ll see them here.",
  },
  favorite: {
    title: "Favorite",
  },
  challengesWorkOut: {
    start: "Start",
    viewAll: "View all",
  },
  challengesWorkOutVideo: {
    pre: "Previous",
    skip: "Skip",
    pause: "Pause",
  },

  // Profile Tab
  profileTab: {
    gender: "Gender",
    height: "Height",
    weight: "Weight",
    restart: "Restart Progress",
    deleteData: "Delete All Data",
    couch: "My coach",
    share: "Share",
    faq: "FAQ",
    privacyPolicy: "Privacy Policy",
    logOut: "Logout",
    restartContent: "Are you sure you want to Restart Progress?",
    deleteContent: "Are you sure you want to Delete All Data?",
    logOutContent: "Are you sure you want to log out?",
    cancel: "Cancel",
    restartBtn: "Restart",
    delete: "Delete",
  },
  editProfile: {
    tile: "Edit Profile",
    fName: "Last Name",
    lName: "Last Name",
    gender: "Gender",
    height: "Height",
    weight: "Weight",
    premium: "Premium",
  },
  faq: {
    title: "FAQ",
  },
  privacyPolicy: {
    title: "Privacy & Policy",
  },
  couchProfile: {
    title: "coach Profile",
    chatCouch: "Chat With coach",
  },

  // plan
  workOut: {
    workOut: "Workout",
    accordingPlan: "coach According Your Plan",
  },

  // Analysis
  analysis: {
    calender: "Calendar",
    historyWorkout : 'History of Workout',
    weight: 'Weight',
    calorieBurn : 'Calorie Burn',
    weightKg : "Weight(kg)",
  },

  // GPS
  location: {
    title: "Your Location",
    start: "START",
    stop: "STOP",
    kilometer: "Kilometer",
    calorie: "Calories",
  },
};
export default STRINGS;

// Home training
export const TrainingData = [
  {
    id: 1,
    image: Assets.trainingOne,
    workOutName: "Warm Up",
    workout: "Workout",
    min: "10 Min",
  },
  {
    id: 2,
    image: Assets.trainingTwo,
    workOutName: "Cool Down",
    workout: "Workout",
    min: "8 Min",
  },
  {
    id: 3,
    image: Assets.trainingThree,
    workOutName: "Lower Body Strength",
    workout: "Stretching",
    min: "7 Min",
  },
];

// Home challenges
export const ChallengesData = [
  {
    id: 1,
    image: Assets.challengesOne,
    workOutName: "Plank Workout",
  },
  {
    id: 2,
    image: Assets.challengesTwo,
    workOutName: "Chest Workout",
  },
  {
    id: 3,
    image: Assets.challengesThree,
    workOutName: "Burn 100 cal",
  },
  {
    id: 4,
    image: Assets.challengesOne,
    workOutName: "Plank Workout",
  },
  {
    id: 5,
    image: Assets.challengesTwo,
    workOutName: "Chest Workout",
  },
  {
    id: 6,
    image: Assets.challengesSix,
    workOutName: "Burn 100 cal",
  },
  {
    id: 7,
    image: Assets.challengesSeven,
    workOutName: "Plank Workout",
  },
  {
    id: 8,
    image: Assets.challengesEight,
    workOutName: "Chest Workout",
  },
  {
    id: 9,
    image: Assets.challengesNine,
    workOutName: "Burn 100 cal",
  },
];

// Home challenges
export const StretchingData = [
  {
    id: 1,
    image: Assets.StretchOne,
    workOutName: "Full body Stretching",
    min: "6 min",
  },
  {
    id: 2,
    image: Assets.StretchTwo,
    workOutName: "Morning Warm Up",
    min: "10 min",
  },
  {
    id: 3,
    image: Assets.StretchThree,
    workOutName: "Burn 100 cal",
    min: "6 min",
  },
  {
    id: 4,
    image: Assets.StretchFour,
    workOutName: "Full body Stretching",
    min: "6 min",
  },
  {
    id: 5,
    image: Assets.StretchFive,
    workOutName: "Morning Warm Up",
    min: "10 min",
  },
  {
    id: 6,
    image: Assets.StretchSix,
    workOutName: "Burn 100 cal",
    min: "6 min",
  },
  {
    id: 7,
    image: Assets.StretchSeven,
    workOutName: "Full body Stretching",
    min: "6 min",
  },
  {
    id: 8,
    image: Assets.StretchEight,
    workOutName: "Morning Warm Up",
    min: "10 min",
  },
  {
    id: 9,
    image: Assets.StretchNine,
    workOutName: "Burn 100 cal",
    min: "6 min",
  },
  {
    id: 10,
    image: Assets.StretchTen,
    workOutName: "Full body Stretching",
    min: "6 min",
  },
  {
    id: 11,
    image: Assets.StretchEleven,
    workOutName: "Morning Warm Up",
    min: "10 min",
  },
  {
    id: 12,
    image: Assets.StretchTwelve,
    workOutName: "Burn 100 cal",
    min: "6 min",
  },
];

export const TodayTrainingData = [
  {
    id: 1,
    name: "Cardiovascular Warm-Up",
    min: "10 min",
    focus: "focus",
  },
  {
    id: 2,
    name: "Dynamic Stretching",
    min: "10 min",
    focus: "focus",
  },
  {
    id: 3,
    name: "Joint Mobility Exercises",
    min: "10 min",
  },
  {
    id: 4,
    name: "Muscle Activation",
    min: "10 min",
  },
  {
    id: 5,
    name: "Sport-Specific Movements",
    min: "10 min",
  },
];

export const NotificationData = [
  {
    id: 1,
    notification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    time: "Just Now ",
  },
  {
    id: 2,
    notification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    time: "1 min",
  },
  {
    id: 3,
    notification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    time: "2 min",
  },
  {
    id: 4,
    notification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    time: "20 min",
  },
  {
    id: 5,
    notification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    time: "Yesterday",
  },
  {
    id: 6,
    notification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    time: "2 min",
  },
  {
    id: 7,
    notification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    time: "20 min",
  },
  {
    id: 8,
    notification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    time: "Yesterday",
  },
];

export const FavoriteData = [
  {
    id: 1,
    name: "Cardiovascular Warm-Up",
    min: "05 min",
    burn: "20 kcal",
    image: Assets.trainingOne,
  },
  {
    id: 2,
    name: "Bicep Curls",
    min: "10 min",
    burn: "60 kcal",
    image: Assets.trainingTwo,
  },
  {
    id: 3,
    name: "Diagonal Plank",
    min: "15 min",
    burn: "80 kcal",
    image: Assets.trainingThree,
  },
];

export const challengesWorkOut = [
  {
    id: 1,
    name: "Plank",
    min: "30 sec",
  },
  {
    id: 2,
    name: "Plank Jacks",
    min: "30 sec",
  },
  {
    id: 3,
    name: "Diagonal Plank",
    min: "30 sec",
  },
  {
    id: 4,
    name: "Side Plank Left",
    min: "30 sec",
  },
  {
    id: 5,
    name: "Side Plank Right",
    min: "30 sec",
  },
  {
    id: 6,
    name: "Diagonal Plank",
    min: "30 sec",
  },
  {
    id: 7,
    name: "Plank Jacks",
    min: "30 sec",
  },
  {
    id: 8,
    name: "Side Plank Right",
    min: "30 sec",
  },
];

export const FaqData = [
  {
    id: 1,
    que: "How Much cardio should I be doing?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tortor vel semper maximus. Nam volutpat, magna vitae pharetra dictum, dolor magna tempor velit, nec varius libero lectus id odio. Nulla facilisi.",
  },
  {
    id: 2,
    que: "How often should I rest?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tortor vel semper maximus. Nam volutpat, magna vitae pharetra dictum, dolor magna tempor velit, nec varius libero lectus id odio. Nulla facilisi.",
  },
  {
    id: 3,
    que: "Should I stretch before my workout?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tortor vel semper maximus. Nam volutpat, magna vitae pharetra dictum, dolor magna tempor velit, nec varius libero lectus id odio. Nulla facilisi.",
  },
  {
    id: 4,
    que: "How do I get started?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tortor vel semper maximus. Nam volutpat, magna vitae pharetra dictum, dolor magna tempor velit, nec varius libero lectus id odio. Nulla facilisi.",
  },
  {
    id: 5,
    que: "Should I work out my abs every day?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tortor vel semper maximus. Nam volutpat, magna vitae pharetra dictum, dolor magna tempor velit, nec varius libero lectus id odio. Nulla facilisi.",
  },
];

export const PolicyData = [
  {
    id: 1,
    title: "Information We Collect From You",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tortor vel semper maximus. Nam volutpat, magna vitae pharetra dictum, dolor magna tempor velit, nec varius libero lectus id odio. Nulla facilisi.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis semper odio, vel hendrerit est. Quisque vestibulum, mi id commodo pulvinar, nisi libero bibendum quam, ut faucibus tortor est id dui. ",
    contentTwo:
      "Cras porttitor placerat ipsum, vel tincidunt odio volutpat non. Proin nec ipsum non ante lobortis rhoncus eu non urna.",
  },
  {
    id: 2,
    title: "Services & Offers",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tortor vel semper maximus. Nam volutpat, magna vitae pharetra dictum, dolor magna tempor velit, nec varius libero lectus id odio. Nulla facilisi.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis semper odio, vel hendrerit est. Quisque vestibulum, mi id commodo pulvinar, nisi libero bibendum quam, ut faucibus tortor est id dui. ",
    contentTwo:
      "Cras porttitor placerat ipsum, vel tincidunt odio volutpat non. Proin nec ipsum non ante lobortis rhoncus eu non urna.",
  },
  {
    id: 3,
    title: "Service Free ",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tortor vel semper maximus. Nam volutpat, magna vitae pharetra dictum, dolor magna tempor velit, nec varius libero lectus id odio. Nulla facilisi.",
  },
];

export const CouchProfileData = [
  {
    name: "About",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
  },
  {
    name: "Reward",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
    content1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  ",
    content2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ipsum dolor sit amet, consectetur adipiscing  ",
  },
];

export const messagesData = [
  {
    id: 1,
    selfMsg: "Hello",
    selfTime: "10:01 am",
    img: Assets.CheckMsg,
  },
  {
    id: 2,
    beauticianMsg: "Hello",
    beauticianTime: "10:00 am",
  },
  {
    id: 3,
    beauticianMsg: "How Can I Help You!",
    beauticianTime: "10:02 am",
  },
  {
    id: 4,
    selfMsg: "Which Exercise Best For Me?",
    selfTime: "10:01 am",
    img: Assets.CheckMsg,
  },
];

export const PlanWorkOut = [
  {
    id: 1,
    img: Assets.PlanOne,
    workOurName: "Bicep Curls",
    count: "0/20",
    min: "10 min",
  },
  {
    id: 2,
    img: Assets.PlanTwo,
    workOurName: "Overhead Triceps Extension",
    count: "0/10",
    min: "5 min",
  },
  {
    id: 3,
    img: Assets.PlanThree,
    workOurName: "Chin-ups/Pull-ups",
    count: "0/15",
    min: "10 min",
  },
  {
    id: 4,
    img: Assets.PlanFour,
    workOurName: "Concentration Curls",
    count: "0/12",
    min: "15 min",
  },
  {
    id: 5,
    img: Assets.PlanOne,
    workOurName: "Bicep Curls",
    count: "0/20",
    min: "12 min",
  },
  {
    id: 6,
    img: Assets.PlanTwo,
    workOurName: "Overhead Triceps Extension",
    count: "0/10",
    min: "10 min",
  },
  {
    id: 7,
    img: Assets.PlanThree,
    workOurName: "Chin-ups/Pull-ups",
    count: "0/15",
    min: "15 min",
  },
  {
    id: 8,
    img: Assets.PlanFour,
    workOurName: "Concentration Curls",
    count: "0/12",
    min: "12 min",
  },
];

export const PlanCouch = [
  {
    id: 1,
    img: Assets.PlanCouch1,
    name: "Emily Smith",
  },
  {
    id: 2,
    img: Assets.PlanCouch2,
    name: "Oliver Taylor",
  },
  {
    id: 3,
    img: Assets.PlanCouch3,
    name: "Henry Wilson",
  },
  {
    id: 4,
    img: Assets.PlanCouch4,
    name: "Olivia Wilson",
  },
  {
    id: 5,
    img: Assets.PlanCouch5,
    name: "Lily Clark",
  },
  {
    id: 6,
    img: Assets.PlanCouch6,
    name: "Daniel Parker",
  },
  {
    id: 7,
    img: Assets.PlanCouch7,
    name: "Ella Davis",
  },
  {
    id: 8,
    img: Assets.PlanCouch5,
    name: "Lily Clark",
  },
  {
    id: 9,
    img: Assets.PlanCouch6,
    name: "Daniel Parker",
  },
  {
    id: 10,
    img: Assets.PlanCouch7,
    name: "Ella Davis",
  },
];

export const ChatListData  = [
  {
      id:1,
      name: 'Daniel Parker',
      time : 'Just Now ',
      image : Assets.ChatList1,
  },
  {
      id:2,
      name: 'James Brown',
      time : '1 min ago ',
      image : Assets.ChatList2,
  },
  {
      id:3,
      name: 'Emma Williams',
      time : '2 min ago ',
      image : Assets.ChatList3,
  },
  {
      id:4,
      name: 'Emmely jack',
      time : '20 min ago ',
      image : Assets.ChatList4,
  },
];


export const ptData = [
  { value: 100, date: "Monday" },
  { value: 150, date: "Monday" },
  { value: 200, date: "Monday" },
  { value: 200, date: "Monday" },
  {
    value: 240,
    date: "Tuesday",
    label: "M",
    labelTextStyle: { color: theme.colors.Cool_Gray, width: 15 },
  },
  { value: 300, date: "Tuesday" },
  { value: 250, date: "Tuesday" },
  { value: 290, date: "Tuesday" },
  { value: 290, date: "Tuesday" },
  {
    value: 90,
    date: "Wednesday",
    label: "T",
    labelTextStyle: { color: theme.colors.Cool_Gray, width: 15 },
  },
  { value: 100, date: "Wednesday" },
  { value: 89, date: "Wednesday" },
  { value: 56, date: "Wednesday" },
  { value: 56, date: "Wednesday" },
  {
    value: 90,
    date: "Thursday",
    label: "W",
    labelTextStyle: { color: theme.colors.Cool_Gray, width: 15 },
  },
  { value: 78, date: "Thursday" },
  { value: 90, date: "Thursday" },
  { value: 80, date: "Thursday" },
  { value: 80, date: "Thursday" },
  {
    value: 70,
    date: "Friday",
    label: "T",
    labelTextStyle: { color: theme.colors.Cool_Gray, width: 15 },
  },
  { value: 78, date: "Friday" },
  { value: 89, date: "Friday" },
  { value: 90, date: "Friday" },
  { value: 90, date: "Friday" },
  {
    value: 67,
    date: "Saturday",
    label: "F",
    labelTextStyle: { color: theme.colors.Cool_Gray, width: 15 },
  },
  { value: 289, date: "Saturday" },
  { value: 80, date: "Saturday" },
  { value: 80, date: "Saturday" },
  { value: 80, date: "Saturday" },
  {
    value: 200,
    date: "Sunday",
    label: "S",
    labelTextStyle: { color: theme.colors.Cool_Gray, width: 15 },
  },
  { value: 267, date: "Sunday" },
  { value: 78, date: "Sunday" },
  { value: 80, date: "Sunday" },
  { value: 50, date: "Sunday" },
  { value: 50, date: "Sunday" },
  {
    value: 200,
    date: "Sunday",
    label: "S",
    labelTextStyle: { color: theme.colors.Cool_Gray, width: 15 },
  },
];


export const topTireData = [
  {
    _id: 1,
    title: "Top Tier",
    month: "$125/month",
    info: {
      lorem1:
        "Lorem ipsum dolor sit amet Sed ut per spic iatis unde omnis iste natus error sit voluptatem.",
      lorem2:
        "Lorem ipsum dolor sit amet Sed ut per spic iatis unde omnis iste.",
      lorem3:
        "Lorem ipsum dolor sit amet Sed ut per spic iatis unde omnis iste natus error sit voluptatem.",
    },
  },
  {
    _id: 2,
    title: "Premium",
    month: "$225/month",
    info: {
      lorem1:
        "Lorem ipsum dolor sit amet Sed ut per spic iatis unde omnis iste natus error sit voluptatem.",
      lorem2:
        "Lorem ipsum dolor sit amet Sed ut per spic iatis unde omnis iste.",
      lorem3:
        "Lorem ipsum dolor sit amet Sed ut per spic iatis unde omnis iste natus error sit voluptatem.",
    },
  },
];