"use client";

import React, { useState } from "react";
import { getTheme, setTheme, useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Switch } from "@/components/ui/Switch";
import { Checkbox } from "@/components/ui/Checkbox";

const DesignSystemPage = () => {
  const { theme, setTheme: changeTheme } = useTheme();
  
  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-inter font-bold text-text mb-2">
                Design System
              </h1>
              <p className="text-lg text-text-muted">
                Live style guide and component library
              </p>
            </div>
            
            {/* Theme Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-text-muted mr-3">Theme:</span>
              <div className="flex bg-input border border-border rounded-lg p-1">
                {["light", "dark", "tarx"].map((t) => (
                  <button
                    key={t}
                    onClick={() => changeTheme(t as any)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      theme === t
                        ? "bg-ds-primary text-white shadow-sm"
                        : "text-text-muted hover:text-text hover:bg-border/50"
                    }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quick Info */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-input/50 rounded-xl p-4">
              <h3 className="font-medium text-text mb-1">Current Theme</h3>
              <p className="text-sm text-text-muted">{theme}</p>
            </div>
            <div className="bg-input/50 rounded-xl p-4">
              <h3 className="font-medium text-text mb-1">Shortcut</h3>
              <p className="text-sm text-text-muted">⌘/Ctrl + J to toggle</p>
            </div>
            <div className="bg-input/50 rounded-xl p-4">
              <h3 className="font-medium text-text mb-1">Components</h3>
              <p className="text-sm text-text-muted">10+ UI primitives</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        
        {/* Colors Section */}
        <section>
          <h2 className="text-2xl font-inter font-bold mb-6 text-text">Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Primary Colors */}
            <div className="space-y-3">
              <h3 className="font-medium text-text mb-3">Primary</h3>
              <ColorSwatch color="bg-ds-primary" name="Primary" />
              <ColorSwatch color="bg-ds-primary/80" name="Primary 80%" />
              <ColorSwatch color="bg-ds-primary/60" name="Primary 60%" />
            </div>
            
            {/* Neutral Colors */}
            <div className="space-y-3">
              <h3 className="font-medium text-text mb-3">Neutrals</h3>
              <ColorSwatch color="bg-text" name="Text" />
              <ColorSwatch color="bg-text-muted" name="Text Muted" />
              <ColorSwatch color="bg-text-subtle" name="Text Subtle" />
              <ColorSwatch color="bg-border" name="Border" />
              <ColorSwatch color="bg-input" name="Input" />
            </div>
            
            {/* Semantic Colors */}
            <div className="space-y-3">
              <h3 className="font-medium text-text mb-3">Semantic</h3>
              <ColorSwatch color="bg-success" name="Success" />
              <ColorSwatch color="bg-warning" name="Warning" />
              <ColorSwatch color="bg-destructive" name="Destructive" />
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="text-2xl font-inter font-bold mb-6 text-text">Typography</h2>
          <div className="space-y-6">
            
            {/* Display Scale */}
            <div>
              <h3 className="font-medium text-text mb-4">Display</h3>
              <div className="space-y-2">
                <div className="text-6xl font-inter font-bold text-text">Display 2XL</div>
                <div className="text-5xl font-inter font-bold text-text">Display XL</div>
                <div className="text-4xl font-inter font-bold text-text">Display Large</div>
              </div>
            </div>
            
            {/* Heading Scale */}
            <div>
              <h3 className="font-medium text-text mb-4">Headings</h3>
              <div className="space-y-2">
                <div className="text-2xl font-inter font-bold text-text">Heading 1</div>
                <div className="text-xl font-inter font-bold text-text">Heading 2</div>
                <div className="text-lg font-inter font-semibold text-text">Heading 3</div>
                <div className="text-base font-inter font-semibold text-text">Heading 4</div>
              </div>
            </div>
            
            {/* Body Scale */}
            <div>
              <h3 className="font-medium text-text mb-4">Body</h3>
              <div className="space-y-2">
                <div className="text-lg text-text">Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div className="text-base text-text">Body Default - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div className="text-sm text-text">Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div className="text-xs text-text-muted">Subtle - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section>
          <h2 className="text-2xl font-inter font-bold mb-6 text-text">Spacing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64].map((space) => (
              <div key={space} className="flex items-center gap-3">
                <div 
                  className={`bg-ds-primary rounded`} 
                  style={{ width: `${space * 4}px`, height: '24px' }}
                />
                <span className="text-sm text-text-muted font-mono">{space * 4}px</span>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius Section */}
        <section>
          <h2 className="text-2xl font-inter font-bold mb-6 text-text">Border Radius</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-ds-primary/20 border-2 border-ds-primary rounded-sm mx-auto mb-2" />
              <p className="text-sm text-text-muted">Small (0.5rem)</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-ds-primary/20 border-2 border-ds-primary rounded mx-auto mb-2" />
              <p className="text-sm text-text-muted">Default (1rem)</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-ds-primary/20 border-2 border-ds-primary rounded-lg mx-auto mb-2" />
              <p className="text-sm text-text-muted">Large (1.5rem)</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-ds-primary/20 border-2 border-ds-primary rounded-xl mx-auto mb-2" />
              <p className="text-sm text-text-muted">XL (2rem)</p>
            </div>
          </div>
        </section>

        {/* Shadows Section */}
        <section>
          <h2 className="text-2xl font-inter font-bold mb-6 text-text">Shadows</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-card shadow-sm rounded-xl mx-auto mb-2" />
              <p className="text-sm text-text-muted">Small</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-card shadow-md rounded-xl mx-auto mb-2" />
              <p className="text-sm text-text-muted">Medium</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-card shadow-lg rounded-xl mx-auto mb-2" />
              <p className="text-sm text-text-muted">Large</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-card shadow-xl rounded-xl mx-auto mb-2" />
              <p className="text-sm text-text-muted">XL</p>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section>
          <h2 className="text-2xl font-inter font-bold mb-6 text-text">Components</h2>
          <div className="space-y-8">
            
            {/* Buttons */}
            <ComponentShowcase 
              title="Buttons" 
              description="Interactive elements for actions and navigation"
            >
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="subtle">Subtle</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button isLoading>Loading</Button>
              </div>
            </ComponentShowcase>
            
            {/* Inputs */}
            <ComponentShowcase 
              title="Inputs" 
              description="Form elements for user input"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <Input placeholder="Default input" />
                <Input placeholder="With label" label="Email" />
                <Input placeholder="Helper text" helperText="This is helper text" />
                <Input placeholder="Error state" error helperText="This field is required" />
              </div>
            </ComponentShowcase>
            
            {/* Cards */}
            <ComponentShowcase 
              title="Cards" 
              description="Containers for related content"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                <Card>
                  <CardHeader>
                    <CardTitle>Simple Card</CardTitle>
                    <CardDescription>
                      A basic card with header and content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-text-muted">
                      This is the card content area where you can put any information.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Card with Footer</CardTitle>
                    <CardDescription>
                      Card including footer actions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-text-muted">
                      Content with action buttons in the footer.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm" variant="outline" className="mr-2">Cancel</Button>
                    <Button size="sm">Save</Button>
                  </CardFooter>
                </Card>
              </div>
            </ComponentShowcase>
            
            {/* Badges */}
            <ComponentShowcase 
              title="Badges" 
              description="Small status and labeling components"
            >
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </ComponentShowcase>
            
            {/* Form Controls */}
            <ComponentShowcase 
              title="Form Controls" 
              description="Checkboxes, switches, and other form elements"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap gap-6">
                  <Checkbox label="Checkbox option" />
                  <Checkbox label="Checked option" defaultChecked />
                  <Checkbox label="Disabled option" disabled />
                </div>
                <div className="flex flex-wrap gap-6">
                  <Switch label="Switch option" />
                  <Switch label="Checked switch" defaultChecked />
                  <Switch label="Disabled switch" disabled />
                </div>
              </div>
            </ComponentShowcase>
            
          </div>
        </section>

        {/* Patterns Section */}
        <section>
          <h2 className="text-2xl font-inter font-bold mb-6 text-text">Patterns</h2>
          <div className="space-y-8">
            
            {/* Page Header Pattern */}
            <ComponentShowcase 
              title="Page Header" 
              description="Standard page header with title, description, and actions"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-inter font-bold text-text mb-2">
                    Page Title
                  </h1>
                  <p className="text-text-muted">
                    A brief description of what this page contains and its primary purpose.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Cancel</Button>
                  <Button size="sm">Save Changes</Button>
                </div>
              </div>
            </ComponentShowcase>
            
            {/* Form Section Pattern */}
            <ComponentShowcase 
              title="Form Section" 
              description="Structured form section with labels, inputs, and help text"
            >
              <div className="max-w-lg space-y-6">
                <div>
                  <h3 className="text-lg font-inter font-semibold text-text mb-4">
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    <Input 
                      label="Full Name" 
                      placeholder="Enter your full name"
                      helperText="This will be displayed on your profile"
                    />
                    <Input 
                      label="Email Address" 
                      type="email" 
                      placeholder="your.email@example.com"
                    />
                    <div className="flex items-center justify-between">
                      <Switch label="Email notifications" />
                      <Badge variant="secondary">Optional</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </ComponentShowcase>
            
            {/* Empty State Pattern */}
            <ComponentShowcase 
              title="Empty State" 
              description="Friendly empty state with icon and call-to-action"
            >
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-ds-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-ds-primary/20 rounded-lg" />
                </div>
                <h3 className="text-lg font-inter font-semibold text-text mb-2">
                  No items found
                </h3>
                <p className="text-text-muted mb-6 max-w-sm mx-auto">
                  There are no items to display yet. Get started by creating your first item.
                </p>
                <Button>Create New Item</Button>
              </div>
            </ComponentShowcase>
            
            {/* List Row Pattern */}
            <ComponentShowcase 
              title="List Row" 
              description="Structured list item with avatar, metadata, and actions"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-border rounded-xl bg-card">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-ds-primary/20 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-ds-primary/40 rounded-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text">John Doe</h4>
                      <p className="text-sm text-text-muted">john.doe@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>Active</Badge>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-xl bg-card">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-warning/20 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-warning/40 rounded-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text">Jane Smith</h4>
                      <p className="text-sm text-text-muted">jane.smith@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="warning">Pending</Badge>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
              </div>
            </ComponentShowcase>
            
            {/* Data Card Pattern */}
            <ComponentShowcase 
              title="Data Card" 
              description="Metric display card with value and trend indicator"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-text-muted">Total Users</p>
                        <p className="text-2xl font-bold text-text">2,543</p>
                      </div>
                      <Badge variant="success">+12%</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-text-muted">Revenue</p>
                        <p className="text-2xl font-bold text-text">$45,231</p>
                      </div>
                      <Badge variant="success">+8%</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-text-muted">Conversion</p>
                        <p className="text-2xl font-bold text-text">3.2%</p>
                      </div>
                      <Badge variant="destructive">-2%</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ComponentShowcase>
            
          </div>
        </section>

        {/* Accessibility Section */}
        <section>
          <h2 className="text-2xl font-inter font-bold mb-6 text-text">Accessibility</h2>
          <div className="space-y-8">
            
            <ComponentShowcase 
              title="Focus Management" 
              description="All interactive elements have visible focus states"
            >
              <div className="space-y-4">
                <p className="text-sm text-text-muted mb-4">
                  Tab through these elements to see focus rings:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button>Focusable Button</Button>
                  <Input placeholder="Focusable input" className="max-w-xs" />
                  <Checkbox label="Focusable checkbox" />
                  <Switch label="Focusable switch" />
                </div>
              </div>
            </ComponentShowcase>
            
            <ComponentShowcase 
              title="Color Contrast" 
              description="All text meets WCAG AA contrast requirements (4.5:1)"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-text mb-2">Primary Text</h3>
                      <p className="text-text mb-4">
                        This is primary text with high contrast for maximum readability.
                      </p>
                      <Badge variant="success">AA Compliant</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-text mb-2">Secondary Text</h3>
                      <p className="text-text-muted mb-4">
                        This is muted text that still maintains sufficient contrast.
                      </p>
                      <Badge variant="success">AA Compliant</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ComponentShowcase>
            
            <ComponentShowcase 
              title="Semantic HTML & ARIA" 
              description="Components use proper semantic HTML and ARIA attributes"
            >
              <div className="space-y-4">
                <div className="bg-input/50 p-4 rounded-xl">
                  <code className="text-xs text-text-muted font-mono">
                    {`<button aria-describedby="help-text" type="button">
  Submit Form
</button>
<p id="help-text">This will save your changes</p>`}
                  </code>
                </div>
                <p className="text-sm text-text-muted">
                  All components include proper ARIA attributes, semantic HTML, and screen reader support.
                </p>
              </div>
            </ComponentShowcase>
            
          </div>
        </section>

        {/* Usage Guidelines */}
        <section>
          <h2 className="text-2xl font-inter font-bold mb-6 text-text">Usage Guidelines</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>
                  How to use this design system in your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 text-sm text-text-muted list-decimal list-inside">
                  <li>Import components from <code className="bg-input px-1 rounded text-xs">@/components/ui</code></li>
                  <li>Use CSS custom properties for consistent theming</li>
                  <li>Apply focus-visible styles for keyboard navigation</li>
                  <li>Test with screen readers and keyboard-only navigation</li>
                  <li>Use semantic HTML elements where possible</li>
                </ol>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Theme Switching</CardTitle>
                <CardDescription>
                  Keyboard shortcuts and theme management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text">Toggle themes</span>
                    <kbd className="bg-input px-2 py-1 rounded text-xs font-mono">⌘ + J</kbd>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text">Themes cycle</span>
                    <span className="text-xs text-text-muted">Light → Dark → Tarx</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text">System preference</span>
                    <span className="text-xs text-text-muted">Auto-detected</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </section>
        
      </div>
    </div>
  );
};

// Color Swatch Component
const ColorSwatch = ({ color, name }: { color: string; name: string }) => (
  <div className="flex items-center gap-3">
    <div className={`w-12 h-12 rounded-xl border border-border ${color}`} />
    <div>
      <p className="font-medium text-sm text-text">{name}</p>
      <p className="text-xs text-text-muted font-mono">{color}</p>
    </div>
  </div>
);

// Component Showcase wrapper
const ComponentShowcase = ({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode;
}) => (
  <div className="space-y-4">
    <div>
      <h3 className="text-lg font-inter font-semibold text-text mb-1">{title}</h3>
      <p className="text-sm text-text-muted">{description}</p>
    </div>
    <div className="p-6 border border-border rounded-xl bg-card/50">
      {children}
    </div>
  </div>
);

export default DesignSystemPage;