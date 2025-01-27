const LOGIN_USER = {
  STANDARD_USER: "standard_user",
  PROBLEM_USER: "problem_user",
  PERFORMANCE_GLITCH_USER: "performance_glitch_user",
  ERROR_USER: "error_user",
  VISUAL_USER: "visual_user",
  LOCKED_OUT_USER: "locked_out_user",
} as const;

export type LoginUser = typeof LOGIN_USER[keyof typeof LOGIN_USER];