import { VariantToast } from "@/components/hooks/useToast";

export interface User {
    id:        string;
    name:      string;
    lastname:  string;
    role:      string;
}

export interface AuthState{
    user: User | null;
    token: string | null;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    login:(user: LoginRequest) => Promise<AuthResponse>;
    logout: () => void;
    checkAuth: (token:string) => Promise<AuthResponse>;
}

interface AuthResponse {
    msg: string;
    status: VariantToast;
    statusCode: number;
}

export interface LoginRequest {
    email: string
    password: string
}

export interface LoginResponse {
    token: string,
}

export interface RegisterRequest {
    email: string
    password: string
    name: string
    lastname: string
}