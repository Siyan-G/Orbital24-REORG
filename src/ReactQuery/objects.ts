import { toHaveDescription } from "@testing-library/jest-dom/matchers"
import { title } from "process"

export interface CourseDetails{
    moduleCode:     string,
    title:          string,
    description:    string,
    moduleCredit:   string,
    department:     string,
    faculty:        string,
    workload:       string
}